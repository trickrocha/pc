document.getElementById('build-pc').addEventListener('click', function() {
    const cpu = document.getElementById('cpu').value;
    const placamae = document.getElementById('placa-mae').value;
    const gpu = document.getElementById('gpu').value;
    const ram = document.getElementById('ram').value;
    const fonte = document.getElementById('fonte').value;
    const storage = document.getElementById('storage').value;
    const gabinete = document.getElementById('gabinete').value;


    const configuration = document.getElementById('configuration');
    configuration.innerHTML = `
        <li><strong>Processador:</strong> ${cpu}</li>
        <li><strong>Placa - Mãe:</strong> ${placamae}</li>
        <li><strong>Placa de Vídeo:</strong> ${gpu}</li>
        <li><strong>Memória RAM:</strong> ${ram}</li>
        <li><strong>Fonte:</strong> ${fonte}</li>
        <li><strong>Armazenamento:</strong> ${storage}</li>
        <li><strong>Gabinete:</strong> ${gabinete}</li>
    `;


    const pcImage = document.getElementById('pc-image');
    let imageUrl;

    if (cpu.includes("Intel Celeron G6900") && gpu.includes("NVIDIA GeForce GT 1030")) {
        imageUrl = 'src/img/Aerocool CS105.jpg';
    } else if (cpu.includes("AMD Athlon 3000G") && gpu.includes("AMD Radeon RX 550")) {
        imageUrl = 'src/img/Cougar MG120-G.jpg';
    } else if (cpu.includes("Intel Core i3-12100F") && gabinete.includes("Cooler")) {
        imageUrl = 'src/img/Cooler Master MasterBox Q300L.jpg';
    } else if (cpu.includes("Intel ") && gpu.includes("Intel ")) {
        imageUrl = 'src/img/Gamemax Draco XD.png';
    } else if (cpu.includes("AMD") && gpu.includes("AMD")) {
        imageUrl = 'src/img/Gamemax Draco XD.png';
    } else if (cpu.includes(" AMD Ryzen 5 5600X") && gpu.includes("AAMD Radeon RX 6600 XT")) {
        imageUrl = 'src/img/Gamemax Draco XD.png';
    } else {
        imageUrl = 'src/img/Lian Li Lancool III.jpg';
    }

    pcImage.src = imageUrl;
    pcImage.hidden = false;
});
