var age;

age = prompt("Please enter your age:")
if (age >= 65) {
    output = "Free Coffee, Friday Nights for Seniors!" 
    document.getElementById('verify').style.color = 'brown';
    document.getElementById('verify').style.fontVariantCaps = 'large-caps';
    document.getElementById('verify').style.fontWeight = 'bold';
} else {
    output = "Enjoy Music and Make Memories!"
}

document.getElementById("verify").innerHTML = output;
