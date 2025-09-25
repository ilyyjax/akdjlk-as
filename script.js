const hairSelect = document.getElementById('hairSelect');
const hairColor = document.getElementById('hairColor');
const eyeColor = document.getElementById('eyeColor');
const mouthSelect = document.getElementById('mouthSelect');
const accessorySelect = document.getElementById('accessorySelect');

const hair = document.getElementById('hair');
const eyes = document.getElementById('eyes');
const mouth = document.getElementById('mouth');
const accessory = document.getElementById('accessory');

hairSelect.addEventListener('change', () => {
    const style = hairSelect.value;
    if (style === 'hair1') hair.style.borderRadius = '50% 50% 30% 30%';
    if (style === 'hair2') hair.style.borderRadius = '50% 50% 50% 50%';
    if (style === 'hair3') hair.style.borderRadius = '20% 80% 50% 50%';
});

hairColor.addEventListener('input', () => {
    hair.style.background = hairColor.value;
});

eyeColor.addEventListener('input', () => {
    eyes.querySelectorAll('::before, ::after');
    eyes.style.setProperty('--eye-color', eyeColor.value);
    eyes.querySelectorAll('::before, ::after').forEach(eye => eye.style.background = eyeColor.value);
});

mouthSelect.addEventListener('change', () => {
    const style = mouthSelect.value;
    if (style === 'mouth1') mouth.style.borderRadius = '10px';
    if (style === 'mouth2') mouth.style.borderRadius = '50%';
    if (style === 'mouth3') mouth.style.borderRadius = '5px 5px 20px 20px';
});

accessorySelect.addEventListener('change', () => {
    const style = accessorySelect.value;
    if (style === 'none') accessory.style.background = 'transparent';
    if (style === 'hat') accessory.style.background = '#333';
    if (style === 'glasses') accessory.style.background = 'rgba(0,0,0,0.5)';
});
