const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Conectado!');
}); 

client.initialize();


client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);
    //INÍCIO CONFIG PF //
    if (msg.body === 'Física') {
        // Física segue para aguardar atendimento.
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
    
    } else if (msg.body === 'física') {
            // Física segue para aguardar atendimento.
            const contact = await msg.getContact();
            const chat = await msg.getChat();
            chat.sendStateTyping();
            await chat.pin();
            msg.react('❤️');
            msg.reply(`Vendedora Gabi ✅:
            \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
        
    }else if (msg.body === 'Fisica') {
        // Física segue para aguardar atendimento.
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
    
    }else if (msg.body === 'fisica') {
        // Física segue para aguardar atendimento.
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
    
    }else if (msg.body === 'pf') {
        // Física segue para aguardar atendimento.
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
    
    }else if (msg.body === 'PF') {
        // Física segue para aguardar atendimento.
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
    
    }else if (msg.body === 'Pf') {
        // Física segue para aguardar atendimento.
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
    
    }else if (msg.body === 'pF') {
        // Física segue para aguardar atendimento.
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
    // FIM CONFIG PF //

    // INÍCIO CONFIG PJ //
    }else if (msg.body === 'Jurídica') {
        // Jurídica segue para consulta de cadastro (possui / não possui).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
        \nPara prosseguir digite (sim) ou (não).`);

    }else if (msg.body === 'Jurídica') {
        // Jurídica segue para consulta de cadastro (possui / não possui).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
        \nPara prosseguir digite (sim) ou (não).`);

    }else if (msg.body === 'jurídica') {
        // Jurídica segue para consulta de cadastro (possui / não possui).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
        \nPara prosseguir digite (sim) ou (não).`);

    }else if (msg.body === 'Juridica') {
        // Jurídica segue para consulta de cadastro (possui / não possui).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
        \nPara prosseguir digite (sim) ou (não).`);

    }else if (msg.body === 'juridica') {
        // Jurídica segue para consulta de cadastro (possui / não possui).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
        \nPara prosseguir digite (sim) ou (não).`);

    }else if (msg.body === 'pj') {
        // Jurídica segue para consulta de cadastro (possui / não possui).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
        \nPara prosseguir digite (sim) ou (não).`);
        
    }else if (msg.body === 'PJ') {
        // Jurídica segue para consulta de cadastro (possui / não possui).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
        \nPara prosseguir digite (sim) ou (não).`);

    }else if (msg.body === 'Pj') {
            // Jurídica segue para consulta de cadastro (possui / não possui).
            const contact = await msg.getContact();
            const chat = await msg.getChat();
            chat.sendStateTyping();
            await chat.pin();
            msg.react('❤️');
            msg.reply(`Vendedora Gabi ✅:
            \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
            \nPara prosseguir digite (sim) ou (não).`);
            
    }else if (msg.body === 'pJ') {
        // Jurídica segue para consulta de cadastro (possui / não possui).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, já possui cadastro em nossa loja?
        \nPara prosseguir digite (sim) ou (não).`);
        // FIM CONFIG PJ //
        
    } else if (msg.body === 'Sim') {
        // Jurídico se possui cadastro (solicitar CNPJ / segue para aguardar atendimento).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, informe o CNPJ do seu cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'sim') {
        // Jurídico se possui cadastro (solicitar CNPJ / segue para aguardar atendimento).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, informe o CNPJ do seu cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);

    } else if (msg.body === 's') {
        // Jurídico se possui cadastro (solicitar CNPJ / segue para aguardar atendimento).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, informe o CNPJ do seu cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);

    } else if (msg.body === 'S') {
        // Jurídico se possui cadastro (solicitar CNPJ / segue para aguardar atendimento).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, informe o CNPJ do seu cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'Não') {
        // Jurídico se não possui cadastro (questiona se deseja efetuar o cadastro).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, gostaria de fazer seu cadastro?
        \nDigite seu CNPJ para cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'não') {
        // Jurídico se não possui cadastro (questiona se deseja efetuar o cadastro).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, gostaria de fazer seu cadastro?
        \nDigite seu CNPJ para cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'nao') {
        // Jurídico se não possui cadastro (questiona se deseja efetuar o cadastro).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, gostaria de fazer seu cadastro?
        \nDigite seu CNPJ para cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'n') {
        // Jurídico se não possui cadastro (questiona se deseja efetuar o cadastro).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, gostaria de fazer seu cadastro?
        \nDigite seu CNPJ para cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'N') {
        // Jurídico se não possui cadastro (questiona se deseja efetuar o cadastro).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, gostaria de fazer seu cadastro?
        \nDigite seu CNPJ para cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'Ñ') {
        // Jurídico se não possui cadastro (questiona se deseja efetuar o cadastro).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, gostaria de fazer seu cadastro?
        \nDigite seu CNPJ para cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'ñ') {
        // Jurídico se não possui cadastro (questiona se deseja efetuar o cadastro).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, gostaria de fazer seu cadastro?
        \nDigite seu CNPJ para cadastro e aguarde atendimento ou digite (Continuar) para prosseguir com seu atendimento.`);
        
    } else if (msg.body === 'Continuar') {
        // Se continuar (segue para aguardar atendimento).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
        
    } else if (msg.body === 'continuar') {
        // Se continuar (segue para aguardar atendimento).
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.react('❤️');
        msg.reply(`Vendedora Gabi ✅:
        \nCerto ${contact.pushname}, para facilitar seu atendimento informe em que posso te ajudar e logo será atendido.`);
        
    } 
    client.on('msg', msg => {
        console.log(msg.body);
    });
    });
 