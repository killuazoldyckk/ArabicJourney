<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Titan+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-image: url('images/homeBg.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }

        .center-button {
            display: inline-block;
            padding: 2rem 3rem;
            background-color: #3390d3;
            color: #333;
            border: 1.5rem solid #ffc644;
            border-radius: 50%;
            font-size: 5rem;
            cursor: pointer;
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
        }

        .text1,.text2 {
            text-align: center;
        }
          
        .text1 h2 {
            padding-top: 1rem;
            font-size: 6rem;
            color: #e67171;
            font-family: 'Titan One', cursive;
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
            margin-bottom: 6rem;
        }

        .text2 h2{
            font-family: 'Press Start 2P', cursive;
            color: #e67171;
            text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
            margin-top: 3rem;
        }

    </style>
</head>
<body>
    <audio autoplay loop>
        <source src="audio/Garden.mp3" type="audio/mp3">
        Your browser does not support the audio element.
    </audio>
    <div class="text1">
        <h2>MY ARABIC JOURNEY</h2>
    </div>
    <button class="center-button" onclick="navigateToPage('page2.html')">
        <i class="fa-solid fa-play fa-fade" style="color: #ffc644;"></i>
    </button>
    <div class="text2">
        <h2>PRESS TO START</h2>
    </div>

    <script>
        var centerButton = document.querySelector('.center-button');
        const clickSound = document.getElementById("clickSound");
    
        centerButton.addEventListener('click', function() {
            window.location.href = 'category.html'; // Redirect to category.html
        });
    </script>
</body>
</html>