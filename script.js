window.onload = function() {
    let counter = 0;
    const interval = setInterval(function(){
        counter++;
        document.querySelector('.counter').innerText = counter + "%";
        if (counter >= 100) {
            clearInterval(interval);
            setTimeout(function(){
                // Yüklenme ekranını yavaşça gizleyelim
                document.querySelector('.loader').style.transition = 'opacity 0.5s ease';
                document.querySelector('.loader').style.opacity = '0';

                // Yüklenme ekranı tamamen kaybolduktan sonra içeriği gösterelim
                setTimeout(function() {
                    document.querySelector('.loader').style.display = 'none';
                    document.querySelector('.content').style.display = 'block';
                    document.querySelector('.content').style.transition = 'opacity 1s ease';
                    document.querySelector('.content').style.opacity = '1';
                }, 50); // Loader kaybolduktan 0.5 saniye sonra içerik yüklenir
            }, 50); // Yüklenme animasyonu tamamlandıktan 0.5 saniye sonra kaybolacak
        }
    }, 40); // Sayacın 100'e kadar 4 saniyede ulaşması için 40ms aralıklarla güncelleniyor
};
