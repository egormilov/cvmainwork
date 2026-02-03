const imageSets = {
    input: ['keyboard.jpg', 'mouse.jpg', 'scanner.jpg', 'microphone.jpg'],
    output: ['printer.jpg', 'speakers.jpg', 'monitor.jpg'],
    systemUnit: ['winchester.jpg', 'RAM.jpg', 'processor.jpg']
};

const imageDescriptions = {
    'keyboard.jpg': 'Клавиатура - устройство ввода информации, состоящее из набора клавиш. Предназначена для ввода текстовых данных и управления компьютером с помощью комбинаций клавиш. Современные клавиатуры могут быть проводными и беспроводными, механическими и мембранными.',
    'mouse.jpg': 'Компьютерная мышь - координатное устройство ввода для управления курсором и отдачи различных команд компьютеру. Современные мыши могут быть оптическими, лазерными, проводными и беспроводными. Имеют минимум две кнопки и колесо прокрутки.',
    'scanner.jpg': 'Сканер - устройство для преобразования бумажных документов, фотографий и других плоских носителей информации в цифровой формат. Бывают планшетные, протяжные, слайд-сканеры и многофункциональные устройства. Используются для оцифровки документов.',
    'microphone.jpg': 'Микрофон - устройство для преобразования звуковых колебаний в электрические сигналы. Используется для голосового общения, записи звука, подкастинга и управления компьютером с помощью голосовых команд. Может быть встроенным или внешним.',
    
    'printer.jpg': 'Принтер - устройство вывода информации на бумажные носители. Бывают лазерные (для текста и графики), струйные (для фотопечати), матричные (для многослойных документов) и 3D-принтеры. Современные принтеры часто являются многофункциональными устройствами.',
    'speakers.jpg': 'Акустическая система (колонки) - устройство для воспроизведения звука. Состоит из одного или нескольких динамиков. Бывают активные (со встроенным усилителем) и пассивные. Используются для прослушивания музыки, просмотра фильмов и игр.',
    'monitor.jpg': 'Монитор (дисплей) - основное устройство отображения визуальной информации от компьютера. Современные мониторы используют LCD, LED, OLED или плазменные технологии. Характеризуются диагональю, разрешением, частотой обновления и временем отклика.',
    
    'winchester.jpg': 'Жесткий диск (HDD) или твердотельный накопитель (SSD) - основное устройство хранения данных в компьютере. HDD использует магнитные диски для записи информации, а SSD - флеш-память. SSD значительно быстрее, но дороже. Хранит операционную систему, программы и файлы пользователя.',
    'RAM.jpg': 'Оперативная память (RAM) - энергозависимая память компьютера для временного хранения данных и команд, необходимых процессору для выполнения операций. Характеризуется объемом (обычно 4-32 ГБ) и частотой. При отключении питания все данные из RAM стираются.',
    'processor.jpg': 'Центральный процессор (CPU) - "мозг" компьютера, выполняющий арифметические и логические операции, управляющий другими компонентами системы. Состоит из ядер (от 2 до 64 в современных моделях), кэш-памяти и контроллеров. Основные производители - Intel и AMD.'
};

let currentIndices = {
    input: 0,
    output: 0,
    systemUnit: 0
};

function getImageNameWithoutExtension(filename) {
    return filename.replace('.jpg', '').replace('.jpeg', '').replace('.png', '').toUpperCase();
}

function openImageInfoPage(filename) {
    const pageContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${getImageNameWithoutExtension(filename)} - Details</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f2f5;
            }
            .container {
                max-width: 1000px;
                margin: 50px auto;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                overflow: hidden;
            }
            .content {
                display: flex;
                padding: 30px;
                gap: 40px;
            }
            .image-container {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .image-container img {
                width: 100%;
                max-width: 400px;
                height: auto;
                border-radius: 10px;
                box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            }
            .info-container {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .title {
                font-size: 32px;
                font-weight: bold;
                color: #333;
                margin-bottom: 20px;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-bottom: 3px solid #4a6bff;
                padding-bottom: 10px;
            }
            .description {
                font-size: 18px;
                line-height: 1.6;
                color: #555;
                text-align: justify;
            }
            .back-button {
                display: inline-block;
                margin-top: 30px;
                padding: 10px 25px;
                background-color: #4a6bff;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                transition: background-color 0.3s;
            }
            .back-button:hover {
                background-color: #3a5bef;
            }
            @media (max-width: 768px) {
                .content {
                    flex-direction: column;
                }
                .image-container img {
                    max-width: 300px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="image-container">
                    <img src="images/${filename}" alt="${getImageNameWithoutExtension(filename)}">
                </div>
                <div class="info-container">
                    <div class="title">${getImageNameWithoutExtension(filename)}</div>
                    <div class="description">${imageDescriptions[filename] || 'Описание отсутствует'}</div>
                    <a href="javascript:window.close()" class="back-button">ЗАКРЫТЬ</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

    const newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write(pageContent);
        newWindow.document.close();
    }
}

function changeImage(sectionId, direction) {
    let currentIndex = currentIndices[sectionId];
    const images = imageSets[sectionId];
    
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    currentIndices[sectionId] = currentIndex;
    
    const imageElement = document.querySelector(`img[data-section="${sectionId}"]`);
    if (imageElement) {
        const imageName = images[currentIndex];
        imageElement.src = `images/${imageName}`;
        imageElement.alt = getImageNameWithoutExtension(imageName);
    }
}

function init() {
    document.querySelectorAll('.arrow.left').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const section = this.closest('.section');
            if (section.classList.contains('input')) {
                changeImage('input', 'prev');
            } else if (section.classList.contains('output')) {
                changeImage('output', 'prev');
            } else if (section.classList.contains('systemUnit')) {
                changeImage('systemUnit', 'prev');
            }
        });
    });
    
    document.querySelectorAll('.arrow.right').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const section = this.closest('.section');
            if (section.classList.contains('input')) {
                changeImage('input', 'next');
            } else if (section.classList.contains('output')) {
                changeImage('output', 'next');
            } else if (section.classList.contains('systemUnit')) {
                changeImage('systemUnit', 'next');
            }
        });
    });

    document.querySelectorAll('.picture img').forEach(img => {
        img.addEventListener('click', function() {
            const section = this.closest('.section');
            let sectionId;
            
            if (section.classList.contains('input')) {
                sectionId = 'input';
            } else if (section.classList.contains('output')) {
                sectionId = 'output';
            } else if (section.classList.contains('systemUnit')) {
                sectionId = 'systemUnit';
            }
            
            if (sectionId) {
                const currentIndex = currentIndices[sectionId];
                const currentImage = imageSets[sectionId][currentIndex];
                openImageInfoPage(currentImage);
            }
        });

        img.style.cursor = 'pointer';
        img.title = 'Нажмите для подробной информации';
    });
    
    Object.keys(imageSets).forEach(section => {
        const imageElement = document.querySelector(`img[data-section="${section}"]`);
        if (imageElement) {
            const imageName = imageSets[section][0];
            imageElement.src = `images/${imageName}`;
            imageElement.alt = getImageNameWithoutExtension(imageName);
        }
    });
}

document.addEventListener('DOMContentLoaded', init);