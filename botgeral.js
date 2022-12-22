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
    if (msg.body === 'Curitiba') {
        // Send a new message as a reply to the current one
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Grupo ShopMaq ✅:
        \nCerto ${contact.pushname}, para qual setor deseja atendimento? \n 💲(1 - Financeiro) \n 🛒(2 - Vendas) \n 🌐(3 - Online) \n 🌐(0 - Tecnologia)`);
    
    }else if (msg.body === 'curitiba') {
            // Send a new message as a reply to the current one
            const contact = await msg.getContact();
            const chat = await msg.getChat();
            chat.sendStateTyping();
            await chat.pin();
            msg.react('❤️');
            msg.reply(`Grupo ShopMaq ✅:
            \nCerto ${contact.pushname}, para qual setor deseja atendimento? \n 💲(1 - Financeiro) \n 🛒(2 - Vendas) \n 🌐(3 - Online) \n 🌐(0 - Tecnologia)`);

    } else if (msg.body === 'Outras') {
        // Send a new message as a reply to the current one
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Grupo ShopMaq ✅:
        \nCerto ${contact.pushname}, para qual setor deseja atendimento? \n 💲(5 - Financeiro) \n 🛒(6 - Vendas) \n 🌐(7 - Online) \n 🌐(0 - Tecnologia)`);
        
    } else if (msg.body === 'outras') {
        // Send a new message as a reply to the current one
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Grupo ShopMaq ✅:
        \nCerto ${contact.pushname}, para qual setor deseja atendimento? \n 💲(5 - Financeiro) \n 🛒(6 - Vendas) \n 🌐(7 - Online) \n 🌐(0 - Tecnologia)`);
        
    } else if (msg.body === 'Outra') {
        // Send a new message as a reply to the current one
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Grupo ShopMaq ✅:
        \nCerto ${contact.pushname}, para qual setor deseja atendimento? \n 💲(5 - Financeiro) \n 🛒(6 - Vendas) \n 🌐(7 - Online) \n 🌐(0 - Tecnologia)`);
        
    } else if (msg.body === 'outra') {
        // Send a new message as a reply to the current one
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        await chat.pin();
        msg.react('❤️');
        msg.reply(`Grupo ShopMaq ✅:
        \nCerto ${contact.pushname}, para qual setor deseja atendimento? \n 💲(5 - Financeiro) \n 🛒(6 - Vendas) \n 🌐(7 - Online) \n 🌐(0 - Tecnologia)`);
        
    } else if (msg.body === '1') {
        msg.reply(`Grupo ShopMaq ✅:
        \n*💰 Financeiro*
        \n👩🏻‍💻 Responsável: ${'Katia'}
        \n📞 Contato: ${'5541995161417'}
    `);    

    } else if (msg.body === '2') {
        msg.reply(`
        \nGrupo ShopMaq ✅:
        \n*🛍️ Vendas*
        \n📞 Gabriella: ${'5541999484177'}
        \n📞 Hemilem: ${'5541999487397'}
        \n📞 Karina: ${'5541995214673'}
        \n👩🏻‍💼 Supervisor: ${'Verediana'}
    `);
    
    } else if (msg.body === '3') {
        msg.reply(`Grupo ShopMaq ✅:
        \n*🏢 Setor Online*
        \n👩🏻‍💻 Responsável: ${'Adriana'}
        \n📞 Contato: ${'554133198700'}
        \n👩🏻‍💼 Supervisor: ${'Katia'}
    `);

    } else if (msg.body === '5') {
        msg.reply(`Grupo ShopMaq ✅:
        \n*💰 Financeiro*
        \n👩🏻‍💻 Responsável: ${'Katia'}
        \n📞 Contato: ${'5541995161417'}
    `); 
    
    } else if (msg.body === '6') {
        msg.reply(`Vendedora Adri ✅:
        \nAguarde um momento e logo será atendido.
    `);
    
    } else if (msg.body === '7') {
        msg.reply(`Vendedora Adri ✅:
        \nAguarde um momento e logo será atendido.
    `);
    
    } else if (msg.body === '0') {
        msg.reply(`Grupo ShopMaq ✅:
        \n*🏢 Tecnologia*
        \n👨🏼‍💻 Responsável: ${'Bueno'}
        \n5541999444648
    `);
    
    } else if (msg.body === 'linkwhats') {
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendStateTyping();
        msg.reply(`Grupo ShopMaq ✅:
        \n*🏢 Tecnologia*
        \n👨🏼‍💻 Responsável: ${'Bueno'}
        \napi.whatsapp.com/send?phone=5541999444648&text=Olá%20me%20chamo%20${contact.pushname}!%20Fui%20direcionado(a)%20pelo%20atendente%20Nel!%20Preciso%20de%20ajuda.
    `);

    }
    client.on('msg', msg => {
        console.log(msg.body);
    });
    });
 