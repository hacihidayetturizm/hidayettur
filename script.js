window.onload = function() {
    let counter = 0;
    const interval = setInterval(function(){
        counter++;
        document.querySelector('.counter').innerText = counter + "%";
        if (counter >= 100) {
            clearInterval(interval);
            setTimeout(function(){
                document.querySelector('.loader').style.display = 'none';
                document.querySelector('.content').style.opacity = '1';
            }, 500); // Yüklenme animasyonu tamamlandıktan 0.5 saniye sonra kaybolacak
        }
    }, 40); // Sayacın 100'e kadar 4 saniyede ulaşması için 40ms aralıklarla güncelleniyor
};
