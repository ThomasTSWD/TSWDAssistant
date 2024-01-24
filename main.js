const { app, BrowserWindow, globalShortcut, Menu, clipboard, screen } = require('electron');
const { getColorHexRGB } = require('electron-color-picker');
const namer = require('color-namer');

let mainWindow;
let isFollowingCursor = true;
const Store = require('electron-store');
const path = require('path'); // Cette ligne

const clipboardStore = new Store({
    name: 'clipboard-history'
});
const { ipcMain } = require('electron');

ipcMain.handle('request-clipboard-history', () => {
    return clipboardStore.get('history') || [];
});


function createWindow() {
    mainWindow = new BrowserWindow({
        width: 650,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            ignoreCertificateErrors: true,
            alwaysOnTop: true,
                        preload: path.join(__dirname, 'preload.js') // Ajoutez cette ligne

        }
        ,     icon: 'icon.png'

    });
    mainWindow.loadURL('https://chat.openai.com/');
    mainWindow.setAlwaysOnTop(true);
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
    setInterval(followCursor, 10);
}

function followCursor() {
    if (isFollowingCursor) {
        const { x, y } = screen.getCursorScreenPoint();
        mainWindow.setPosition(x + 10, y + 10);
    }
}
function loadSnippets() {
    mainWindow.loadURL('https://admin.tswd.fr/wp-admin/admin.php?page=snippets-page');
}
function loadTools() {
    mainWindow.loadURL('https://tswd.fr/tools');
}
function loadChatGPT() {
    mainWindow.loadURL('https://chat.openai.com/');
}


function loadHex() {
    mainWindow.loadURL(`file://${__dirname}/tools/hex-rgb/index.html`);
}
function loadBeautify() {
    mainWindow.loadURL(`file://${__dirname}/tools/beautify/index.html`);
}
function loadCalc() {
    mainWindow.loadURL(`file://${__dirname}/tools/calc/index.html`);
}
function loadImageEditor() {
    mainWindow.loadURL(`file://${__dirname}/tools/imageeditor/index.html`);
}
function loadLorem() {
    mainWindow.loadURL(`file://${__dirname}/tools/lorem/index.html`);
}

function loadClipboardHistory() {
    mainWindow.loadURL(`file://${__dirname}/clipboard.html`);

    function sendClipboardData() {
        const clipboardData = clipboardStore.get('history') || [];
        mainWindow.webContents.send('clipboard-data', clipboardData);
        // Retirer l'écouteur après avoir envoyé les données
        mainWindow.webContents.removeListener('did-finish-load', sendClipboardData);
    }

    mainWindow.webContents.on('did-finish-load', sendClipboardData);
}

function clearClipboardHistory() {
    clipboardStore.set('history', []);
    clipboardStore.set('lastPurged', new Date().toISOString());
    if (mainWindow) {
        mainWindow.webContents.send('clear-clipboard-history');
    }
}



app.on('ready', () => {
    createWindow();
    globalShortcut.register('Ctrl+Space', () => {
        isFollowingCursor = !isFollowingCursor;
        if (mainWindow.isAlwaysOnTop()) {
            mainWindow.setAlwaysOnTop(false);
        } else {
            mainWindow.setAlwaysOnTop(true);
        }
    });

    // Vérification et purge au démarrage
    const lastPurged = clipboardStore.get('lastPurged') || new Date().toISOString();
    const oneDayHasPassed = new Date() - new Date(lastPurged) > 24 * 60 * 60 * 1000;

    if (oneDayHasPassed) {
        clipboardStore.set('history', []);
        clipboardStore.set('lastPurged', new Date().toISOString());
    }

    // Sauvegarde du contenu du presse-papier
    setInterval(() => {
        const currentClip = clipboard.readText();
        const history = clipboardStore.get('history') || [];

        if (!history.includes(currentClip)) {
            history.push(currentClip);
            clipboardStore.set('history', history);
        }
    }, 1000);




/************  COLOR PICKER ****************/




const saveColorToClipboard = async () => {
  let color = '';
  
  if (process.platform === 'darwin') {
    color = await getColorForMac();
  } else {
    color = await getColorHexRGB().catch((error) => {
      console.warn('[ERROR] getColor', error);
    });
  }

  // Obtenir le nom de la couleur
  const colorName = getNamedColor(color);
  
  console.log(`getColor: ${color}, Name: ${colorName}`);
  displayThumb();
  // Ici, vous pouvez choisir d'écrire seulement la couleur, seulement le nom, 
  // ou les deux dans le presse-papiers.
  clipboard.writeText(`${color} (${colorName})`);
}


function getNamedColor(hexValue) {
    const colorNames = namer(hexValue);
    if (colorNames.basic && colorNames.basic.length > 0) {
        return colorNames.basic[0].name; // Retourne le nom le plus proche de la couleur.
    }
    return null; // Si aucun nom n'a été trouvé.
}

// MAC support (permissions)
const {
  darwinGetScreenPermissionGranted,
  darwinRequestScreenPermissionPopup,
  darwinGetColorHexRGB
} = require('electron-color-picker');

async function getColorForMac() {
  if (process.platform !== 'darwin') {
    return '';
  }

  const isGranted = await darwinGetScreenPermissionGranted(); // vérifie si l'autorisation est déjà accordée
  if (!isGranted) {
    await darwinRequestScreenPermissionPopup(); // demande l'autorisation à l'utilisateur
    console.warn('Permission not granted yet, try again');
    return '';
  }

  return await darwinGetColorHexRGB().catch((error) => {
    console.warn('[ERROR] getColor', error);
    return '';
  });
}

/***************** thumb ***************/

let thumbWindow;


function displayThumb() {
    // Si la fenêtre existe déjà, la détruit.
    if (thumbWindow) {
        thumbWindow.close();
        thumbWindow.destroy();
        thumbWindow = null;
    }

    thumbWindow = new BrowserWindow({
        width: 250,
        height: 250,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        skipTaskbar: true,
        resizable: false,
        movable: false,
        show: false,
    });

    thumbWindow.loadURL('data:text/html;charset=UTF-8,' + encodeURIComponent(thumbHTML), {
        baseURLForDataURL: `file://${__dirname}/`
    });

    thumbWindow.once('ready-to-show', () => {
        thumbWindow.show();
        setTimeout(() => {
            thumbWindow.close();
            thumbWindow.destroy();
            thumbWindow = null;
        }, 2000);
    });

    thumbWindow.on('closed', () => {
        thumbWindow = null;
    });
}

const thumbHTML = `
<html>
  <head>
    <title>Thumb Emoji</title>
    <style>
      @keyframes slideFade {
        0% {
          transform: translateY(0);
          opacity: 1;
        }
        100% {
          transform: translateY(-20px); /* Ajustez cette valeur pour changer la distance de montée */
          opacity: 0;
        }
      }

      body {
        font-size: 30px; 
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width:100%;
        animation: slideFade 1s forwards; /* L'animation durera 1 seconde */
      }
      body, html{
        overflow:hidden;
      }
    </style>
  </head>
  <body>
    🍦
  </body>
</html>
`;


/************  Définition des menus ****************/






    const promptMenu = Menu.buildFromTemplate([
         { 
            label: 'Prompt Code',
            click: insertCodePrompt
        }
        ,
        { 
            label: 'Prompt Mail',
            click: insertMailPrompt
        }
        ,
        { 
            label: 'Prompt Blog',
            click: insertBlogPrompt
        },
      
        { 
            label: 'Prompt Prof',
            click: insertProfPrompt
        }
    ]);

const mainMenu = Menu.buildFromTemplate([
   
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'togglefullscreen' },
            { role: 'toggledevtools' },
            { role: 'quit' }
        ]
    },
    {
        label: '🤖 ChatGPT',
        click: loadChatGPT
    },
    {
        label: '💬 Prompts',
        submenu: promptMenu
    },
    /*{
        label: '🛠️ Snippets',
        click: loadSnippets
    },
    {
        label: '🔧 Tools',
        click: loadTools
    },*/
    {
        label: '📋 Clipboard',
        submenu: [
            {
                label: 'Afficher l\'historique',
                click: loadClipboardHistory
            },
            {
                label: 'Vider l\'historique',
                click: clearClipboardHistory
            }
        ]
    } ,{
        label: '🌈 Color',
 submenu: [
            {
                label: 'Picker',
click: saveColorToClipboard            },
            {
                label: 'HEX-RGB',
                click: loadHex
            }
        ]



        
    }   

    ,
     {
        label: '🔢 Calc',
        click: loadCalc
    },
     {
        label: '✨ Beautify',
        click: loadBeautify
    }
    ,
     {
        label: '🎲 Lorem',
        click: loadLorem
    },
    {
        label: '🖼 Image',
        click: loadImageEditor
    }
]);

Menu.setApplicationMenu(mainMenu);



});
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function() {
    if (mainWindow === null) {
        createWindow();
    }
});
// Fonctions pour insérer du texte dans le textarea ...
function insertCodePrompt() {
    mainWindow.webContents.executeJavaScript(`document.getElementById("prompt-textarea").value = "Tu es 🍦 𝗧𝗦𝗪𝗗'𝘀 𝗪𝗲𝗯 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 🍦, l'assistant dédié à un webdesigner créatif. On te consultera principalement pour des questions liées à la création de code (CSS, Javascript, Php), l'explication de code, et Wordpress. Réponse: Tes réponses doivent être courtes, concises et précises. Si une question nécessite des détails supplémentaires pour une meilleure compréhension, n'hésite pas à poser des questions en retour. Si la réponse échappe à ta connaissance, tu peux te référer à des plugins ou ressources en ligne. Style de code: Lors de la programmation, tu suis à la lettre les directives. Priorise les meilleures pratiques, notamment en matière de sécurité, de performance et de SEO. Ton code favorise l'utilisation de petites fonctions et la lisibilité est essentielle. Les attributs sont nommés de façon descriptive, et tu fais preuve de cohérence lors des corrections. Les commentaires dans le code sont brefs mais informatifs. Ton: Bien que tu vouvoies, tu restes amusant et utilises des emoticons pour égayer la conversation. Merci d'avance pour tes précieuses réponses.";`);
}

function insertMailPrompt() {
    mainWindow.webContents.executeJavaScript(`document.getElementById("prompt-textarea").value = "Tu es 💌 𝗧𝗦𝗪𝗗'𝘀 𝗘𝗺𝗮𝗶𝗹 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 💌 spécialisé dans la rédaction d'e-mails professionnels pour un webdesigner créatif. Tes utilisateurs te consulteront principalement pour : Répondre aux e-mails ou rédiger des emails. Réponse: Chaque réponse doit être réfléchie et axée sur la valeur ajoutée pour l'utilisateur. Tu es ici pour rendre les mails attrayants pour les destinataires tout en étant clairs et efficaces, concis. Style de rédaction: Tu priorises la clarté et l'engagement. Les e-mails que tu proposes sont toujours pertinents pour le public cible. Tu utilises des accroches efficaces, des sous-titres informatifs et des appels à l'action clairs. Formules de politesse simple du style Hello, Bonjour, + Prénom ou À bientôt, À très vite, Cordialement Ton: Tout en maintenant un ton professionnel, tu gardes une touche légère et amusante. Tu peux ponctuer tes conseils et réponses avec des emoticons pour égayer la conversation. Merci d'avance pour tes précieuses réponses.";`);
}
function insertBlogPrompt() {
    mainWindow.webContents.executeJavaScript(`document.getElementById("prompt-textarea").value = "Tu es 🎈 𝗧𝗦𝗪𝗗'𝘀 𝗕𝗹𝗼𝗴𝗴𝗶𝗻𝗴 𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁 🎈 la création de contenus de blog optimisés pour le SEO. Tes utilisateurs te consulteront principalement pour: Des conseils pour rendre leur contenu plus SEO-friendly. Des astuces pour améliorer la rédaction de leurs articles de blog. Réponse: Chaque réponse doit être réfléchie et axée sur la valeur ajoutée pour l'utilisateur. Tu es ici pour aider à peaufiner le contenu, le rendre attrayant pour les lecteurs et optimisé pour les moteurs de recherche. Conseils SEO: Tu offres des suggestions basées sur les meilleures pratiques SEO, y compris le choix des mots-clés, la structuration du contenu et l'optimisation des métadonnées. Style de rédaction: Tu priorises la clarté et l'engagement. Le contenu que tu proposes est toujours pertinent pour le public cible. Tu utilises des titres accrocheurs, des sous-titres informatifs et des appels à l'action efficaces. Ton: Tout en maintenant un ton professionnel, tu gardes une touche légère et amusante. Tu peux ponctuer tes conseils et réponses avec des emoticons pour égayer la conversation. Merci d'avance pour tes précieuses réponses.";`);
}

function insertProfPrompt() {
    mainWindow.webContents.executeJavaScript(`document.getElementById("prompt-textarea").value = "Tu es 🤓 Formateur de Code Webdesigner 🖌, dédié à guider un webdesigner en herbe dans le monde du code. Tu es consulté principalement pour des questions liées à PHP, CSS, et JavaScript, particulièrement pour les designers qui ont des notions mais qui pourraient avoir oublié certains principes de base. Réponse: Explications: Décompose le code pour l'utilisateur, en s'assurant qu'il comprend non seulement le comment, mais surtout le pourquoi. Acronymes et Étymologie: Traduis les acronymes et offre l'histoire et l'origine des termes pour une meilleure compréhension. Ressources: Si tu ne peux pas répondre directement, utilise les plugins. Style de code: Priorise des exemples de code courts et clairs avec des commentaires informatifs. Assure-toi que le code est toujours conforme aux meilleures pratiques, en particulier en matière de sécurité, de performance et de SEO. Ton: Vouvoie toujours l'utilisateur, mais garde une approche amicale et ludique. Utilise des emoticons pour rendre la conversation plus engageante 😊. Merci d'avance pour tes précieuses réponses.";`);
}