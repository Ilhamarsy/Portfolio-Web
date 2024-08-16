'use client';
import { Typewriter } from 'react-simple-typewriter';

const specialist = [
  'Student',
  'Sotfware Developer',
  'Backend Developer',
  'Beginner Developer',
];

function MyTypewriter() {
  return (
    <Typewriter
      words={specialist}
      loop={false}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  );
}

export default MyTypewriter;
