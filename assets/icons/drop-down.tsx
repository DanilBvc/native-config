import { Path, Svg } from 'react-native-svg';

export function DropDownIcon () {
  return (
    <Svg width="23" height="15" viewBox="0 0 23 15" fill="none">
      <Path
        d="M21.3125 6.25H1.1875C0.531662 6.25 0 6.78166 0 7.4375V7.5625C0 8.21834 0.531662 8.75 1.1875 8.75H21.3125C21.9683 8.75 22.5 8.21834 22.5 7.5625V7.4375C22.5 6.78166 21.9683 6.25 21.3125 6.25Z"
        fill="#B37840"
      />
      <Path
        d="M21.3125 12.5H1.1875C0.531662 12.5 0 13.0317 0 13.6875V13.8125C0 14.4683 0.531662 15 1.1875 15H21.3125C21.9683 15 22.5 14.4683 22.5 13.8125V13.6875C22.5 13.0317 21.9683 12.5 21.3125 12.5Z"
        fill="#B37840"
      />
      <Path
        d="M21.3125 0H1.1875C0.531662 0 0 0.531662 0 1.1875V1.3125C0 1.96834 0.531662 2.5 1.1875 2.5H21.3125C21.9683 2.5 22.5 1.96834 22.5 1.3125V1.1875C22.5 0.531662 21.9683 0 21.3125 0Z"
        fill="#B37840"
      />
    </Svg>
  );
}

export function CloseIcon ({ stroke = '#B37840' }: { stroke?: string }) {
  return (
    <Svg width="23" height="19" viewBox="0 0 18 19" fill="none">
      <Path
        d="M16.5494 2L2 17M2 2L16.5494 17"
        stroke={stroke}
        strokeWidth="2.8125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function LogOutIcon () {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
        stroke="#56371A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3333 14.1663L17.4999 9.99967L13.3333 5.83301"
        stroke="#56371A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 10H7.5"
        stroke="#56371A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
