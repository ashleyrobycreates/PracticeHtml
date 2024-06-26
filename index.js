const colorSelect =document.getElementByID("background-color");
const details =document.getElementByID("details");

const dogImg = document.getElementByID("dogImg");

fetch('https://images.dog.ceo/breeds/terrier-russell/iguet4.jpg')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    dogImages.push(data.message);
                    dogImage.src = dogImages[currentImageIndex];
                    updateHeartButton();
                }
                else {
                    fetchNewDogImage();
                }
            })
    