// Switch statement 
const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan mountain trekking');
    console.log('Go to visapur trekking');
    break;
  case 'tuesday':
    console.log('Prepare for street photography');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write trekking experience');
    break;
  case 'friday':
    console.log('Make trip vedios');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend 😎');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan mountain trekking');
  console.log('Go to visapur trekking');
} else if (day === 'tuesday') {
  console.log('Prepare for street photography');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write trekking experience');
} else if (day === 'friday') {
  console.log('Make trip vedios');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend 😎');
}

// note - without a break the code simply executing