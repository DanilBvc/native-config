import { Path, Svg } from 'react-native-svg';
import * as React from 'react';

interface SvgProps {
  stroke?: string;
  fill?: string;
}

export function HomeSvg ({ stroke = '#B37840' }: SvgProps) {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Path
        d="M25 23.125V10.375C25 10.1421 24.9458 9.91246 24.8416 9.70418C24.7375 9.4959 24.5863 9.31472 24.4 9.175L13.9 1.3C13.6404 1.10527 13.3246 1 13 1C12.6754 1 12.3596 1.10527 12.1 1.3L1.6 9.175C1.41371 9.31472 1.2625 9.4959 1.15836 9.70418C1.05422 9.91246 1 10.1421 1 10.375V23.125C1 23.5228 1.15804 23.9044 1.43934 24.1857C1.72064 24.467 2.10218 24.625 2.5 24.625H8.5C8.89782 24.625 9.27936 24.467 9.56066 24.1857C9.84196 23.9044 10 23.5228 10 23.125V18.625C10 18.2272 10.158 17.8456 10.4393 17.5643C10.7206 17.283 11.1022 17.125 11.5 17.125H14.5C14.8978 17.125 15.2794 17.283 15.5607 17.5643C15.842 17.8456 16 18.2272 16 18.625V23.125C16 23.5228 16.158 23.9044 16.4393 24.1857C16.7206 24.467 17.1022 24.625 17.5 24.625H23.5C23.8978 24.625 24.2794 24.467 24.5607 24.1857C24.842 23.9044 25 23.5228 25 23.125Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function UserSvg ({ fill = '#B37840' }: SvgProps) {
  return (
    <Svg width="25" height="29" viewBox="0 0 25 29" fill="none">
      <Path
        d="M19.3208 12.6875C19.8248 12.8385 20.3048 13.0435 20.7606 13.3025C21.2164 13.5614 21.6936 13.9552 22.1923 14.4838C22.6911 15.0125 23.1174 15.6355 23.4713 16.353C23.8252 17.0704 24.1201 17.9982 24.3561 19.1364C24.592 20.2746 24.71 21.5504 24.71 22.9637C24.71 24.6252 24.1738 26.0466 23.1013 27.228C22.0288 28.4093 20.7365 29 19.2243 29H5.48575C3.97355 29 2.68121 28.4093 1.60872 27.228C0.536241 26.0466 0 24.6252 0 22.9637C0 21.5504 0.117973 20.2746 0.353919 19.1364C0.589865 17.9982 0.884798 17.0704 1.23872 16.353C1.59264 15.6355 2.01895 15.0125 2.51765 14.4838C3.01636 13.9552 3.49361 13.5614 3.94942 13.3025C4.40522 13.0435 4.88516 12.8385 5.38923 12.6875C4.54196 11.3389 4.11833 9.87165 4.11833 8.28571C4.11833 7.16369 4.33551 6.09291 4.76987 5.07338C5.20422 4.05385 5.79141 3.17188 6.53142 2.42746C7.27143 1.68304 8.14819 1.09235 9.16168 0.655413C10.1752 0.218471 11.2396 0 12.355 0C13.4704 0 14.5348 0.218471 15.5483 0.655413C16.5618 1.09235 17.4386 1.68304 18.1786 2.42746C18.9186 3.17188 19.5058 4.05385 19.9401 5.07338C20.3745 6.09291 20.5917 7.16369 20.5917 8.28571C20.5917 9.87165 20.168 11.3389 19.3208 12.6875ZM12.355 2.07143C10.6498 2.07143 9.19386 2.67829 7.98731 3.89202C6.78077 5.10575 6.1775 6.57031 6.1775 8.28571C6.1775 10.0011 6.78077 11.4657 7.98731 12.6794C9.19386 13.8931 10.6498 14.5 12.355 14.5C14.0602 14.5 15.5161 13.8931 16.7227 12.6794C17.9292 11.4657 18.5325 10.0011 18.5325 8.28571C18.5325 6.57031 17.9292 5.10575 16.7227 3.89202C15.5161 2.67829 14.0602 2.07143 12.355 2.07143ZM19.2243 26.9286C20.168 26.9286 20.9751 26.5429 21.6454 25.7715C22.3157 25.0001 22.6508 24.0642 22.6508 22.9637C22.6508 20.3852 22.2299 18.3516 21.388 16.8627C20.5461 15.3739 19.3369 14.5917 17.7603 14.5162C16.2052 15.8863 14.4034 16.5714 12.355 16.5714C10.3066 16.5714 8.50479 15.8863 6.94969 14.5162C5.37314 14.5917 4.16391 15.3739 3.32202 16.8627C2.48012 18.3516 2.05917 20.3852 2.05917 22.9637C2.05917 24.0642 2.39432 25.0001 3.06462 25.7715C3.73492 26.5429 4.54196 26.9286 5.48575 26.9286H19.2243Z"
        fill={fill}
      />
    </Svg>
  );
}

export function QuestionSvg ({ fill = '#B37840' }: SvgProps) {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Path
        d="M16.8321 9.94236V9.90461C16.8321 7.64 15.0657 5.97928 12.3934 5.97928C11.5754 5.96576 10.7644 6.13257 10.0182 6.46787C9.27191 6.80317 8.60866 7.29871 8.07554 7.9193C8.00148 7.98794 7.94194 8.07074 7.90045 8.1628C7.85895 8.25486 7.83635 8.35431 7.83398 8.45526C7.83393 8.5484 7.85262 8.64059 7.88893 8.72636C7.92524 8.81213 7.97843 8.88972 8.04533 8.95452C8.11224 9.01931 8.1915 9.06998 8.27839 9.10352C8.36528 9.13706 8.45802 9.15278 8.55111 9.14974C8.75053 9.1448 8.94122 9.06691 9.08707 8.93083C9.49053 8.45804 9.99162 8.07826 10.5559 7.81764C11.1201 7.55702 11.7341 7.42173 12.3557 7.42108C14.1372 7.42108 15.2468 8.56849 15.2468 9.9952V10.0329C15.2468 11.7012 13.9183 12.6297 11.8197 12.7882C11.7347 12.7915 11.6514 12.8127 11.5752 12.8504C11.499 12.8881 11.4316 12.9415 11.3774 13.0071C11.3233 13.0726 11.2836 13.1489 11.2609 13.2309C11.2383 13.3128 11.2332 13.3986 11.246 13.4827C11.246 13.4827 11.246 15.234 11.246 15.5586C11.2648 15.7455 11.3525 15.9186 11.4921 16.0442C11.6317 16.1699 11.8131 16.2389 12.0009 16.238H12.0839C12.2708 16.2192 12.4439 16.1315 12.5695 15.9919C12.6952 15.8523 12.7642 15.6709 12.7633 15.4831V13.9281C14.9977 13.5884 16.8321 12.4183 16.8321 9.94236Z"
        fill={fill}
      />
      <Path
        d="M12.0012 19.9663C12.5223 19.9663 12.9448 19.5438 12.9448 19.0227C12.9448 18.5016 12.5223 18.0791 12.0012 18.0791C11.4801 18.0791 11.0576 18.5016 11.0576 19.0227C11.0576 19.5438 11.4801 19.9663 12.0012 19.9663Z"
        fill={fill}
      />
      <Path
        d="M23.7972 9.6071C23.6924 9.23305 23.2754 9.05898 22.9043 9.1739C22.5128 9.29516 22.2653 9.70867 22.3721 10.1044C22.9268 12.1595 22.8516 14.3408 22.1464 16.362C21.3545 18.6316 19.8151 20.5649 17.7805 21.845C15.7459 23.125 13.3368 23.676 10.9481 23.4076C8.55935 23.1392 6.33265 22.0672 4.63292 20.3675C2.9332 18.6678 1.86128 16.4411 1.59285 14.0523C1.32441 11.6636 1.87539 9.25453 3.15548 7.21996C4.43556 5.18538 6.36882 3.64599 8.63841 2.85408C10.6597 2.14881 12.8409 2.07368 14.896 2.62837C15.2918 2.73519 15.7053 2.48772 15.8266 2.09614C15.9415 1.72506 15.7674 1.30804 15.3933 1.20325C12.9969 0.531916 10.4453 0.612995 8.08753 1.44536C5.50136 2.35835 3.30118 4.12126 1.84633 6.44617C0.39147 8.77108 -0.232084 11.5206 0.0775058 14.2457C0.387095 16.9707 1.61153 19.5103 3.55084 21.4496C5.49014 23.3889 8.02971 24.6133 10.7548 24.9229C13.4798 25.2325 16.2294 24.609 18.5543 23.1541C20.8792 21.6993 22.6421 19.4991 23.5551 16.9129C24.3874 14.5551 24.4685 12.0035 23.7972 9.6071Z"
        fill={fill}
      />
      <Path
        d="M21.2255 7.54873C23.3101 7.54873 24.9999 5.85889 24.9999 3.77436C24.9999 1.68984 23.3101 0 21.2255 0C19.141 0 17.4512 1.68984 17.4512 3.77436C17.4512 5.85889 19.141 7.54873 21.2255 7.54873Z"
        fill={fill}
      />
    </Svg>
  );
}

export function CaseSvg ({ stroke = '#B37840' }: SvgProps) {
  return (
    <Svg width="27" height="27" viewBox="0 0 27 27" fill="none">
      <Path
        d="M18.5 6C18.5 3.6425 18.5 2.465 17.7675 1.7325C17.035 1 15.8575 1 13.5 1C11.1425 1 9.965 1 9.2325 1.7325C8.5 2.465 8.5 3.6425 8.5 6M1 16C1 11.2863 1 8.92875 2.465 7.465C3.92875 6 6.28625 6 11 6H16C20.7137 6 23.0712 6 24.535 7.465C26 8.92875 26 11.2863 26 16C26 20.7137 26 23.0712 24.535 24.535C23.0712 26 20.7137 26 16 26H11C6.28625 26 3.92875 26 2.465 24.535C1 23.0712 1 20.7137 1 16Z"
        stroke={stroke}
        strokeWidth="1.875"
      />
      <Path
        d="M13.5 20.1663C14.8813 20.1663 16 19.2337 16 18.0837C16 16.9337 14.8813 16 13.5 16C12.1187 16 11 15.0675 11 13.9163C11 12.7663 12.1187 11.8337 13.5 11.8337M13.5 20.1663C12.1187 20.1663 11 19.2337 11 18.0837M13.5 20.1663V21M13.5 11.8337V11M13.5 11.8337C14.8813 11.8337 16 12.7663 16 13.9163"
        stroke={stroke}
        strokeWidth="1.875"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function QrCodeSvg () {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <Path
        d="M0 1.5625C0 1.1481 0.16462 0.750671 0.457646 0.457646C0.750671 0.16462 1.1481 0 1.5625 0L10.9375 0C11.3519 0 11.7493 0.16462 12.0424 0.457646C12.3354 0.750671 12.5 1.1481 12.5 1.5625C12.5 1.9769 12.3354 2.37433 12.0424 2.66735C11.7493 2.96038 11.3519 3.125 10.9375 3.125H3.125V10.9375C3.125 11.3519 2.96038 11.7493 2.66735 12.0424C2.37433 12.3354 1.9769 12.5 1.5625 12.5C1.1481 12.5 0.750671 12.3354 0.457646 12.0424C0.16462 11.7493 0 11.3519 0 10.9375V1.5625ZM37.5 1.5625C37.5 1.1481 37.6646 0.750671 37.9576 0.457646C38.2507 0.16462 38.6481 0 39.0625 0L48.4375 0C48.8519 0 49.2493 0.16462 49.5424 0.457646C49.8354 0.750671 50 1.1481 50 1.5625V10.9375C50 11.3519 49.8354 11.7493 49.5424 12.0424C49.2493 12.3354 48.8519 12.5 48.4375 12.5C48.0231 12.5 47.6257 12.3354 47.3326 12.0424C47.0396 11.7493 46.875 11.3519 46.875 10.9375V3.125H39.0625C38.6481 3.125 38.2507 2.96038 37.9576 2.66735C37.6646 2.37433 37.5 1.9769 37.5 1.5625ZM1.5625 37.5C1.9769 37.5 2.37433 37.6646 2.66735 37.9576C2.96038 38.2507 3.125 38.6481 3.125 39.0625V46.875H10.9375C11.3519 46.875 11.7493 47.0396 12.0424 47.3326C12.3354 47.6257 12.5 48.0231 12.5 48.4375C12.5 48.8519 12.3354 49.2493 12.0424 49.5424C11.7493 49.8354 11.3519 50 10.9375 50H1.5625C1.1481 50 0.750671 49.8354 0.457646 49.5424C0.16462 49.2493 0 48.8519 0 48.4375V39.0625C0 38.6481 0.16462 38.2507 0.457646 37.9576C0.750671 37.6646 1.1481 37.5 1.5625 37.5ZM48.4375 37.5C48.8519 37.5 49.2493 37.6646 49.5424 37.9576C49.8354 38.2507 50 38.6481 50 39.0625V48.4375C50 48.8519 49.8354 49.2493 49.5424 49.5424C49.2493 49.8354 48.8519 50 48.4375 50H39.0625C38.6481 50 38.2507 49.8354 37.9576 49.5424C37.6646 49.2493 37.5 48.8519 37.5 48.4375C37.5 48.0231 37.6646 47.6257 37.9576 47.3326C38.2507 47.0396 38.6481 46.875 39.0625 46.875H46.875V39.0625C46.875 38.6481 47.0396 38.2507 47.3326 37.9576C47.6257 37.6646 48.0231 37.5 48.4375 37.5ZM12.5 13C12.5 12.7239 12.7239 12.5 13 12.5H15.125C15.4011 12.5 15.625 12.7239 15.625 13V15.125C15.625 15.4011 15.4011 15.625 15.125 15.625H13C12.7239 15.625 12.5 15.4011 12.5 15.125V13Z"
        fill="#56371A"
      />
      <Path
        d="M21.875 7.25C21.875 6.69772 21.4273 6.25 20.875 6.25H7.25C6.69772 6.25 6.25 6.69772 6.25 7.25V20.875C6.25 21.4273 6.69772 21.875 7.25 21.875H20.875C21.4273 21.875 21.875 21.4273 21.875 20.875V7.25ZM9.375 10.375C9.375 9.82272 9.82272 9.375 10.375 9.375H17.75C18.3023 9.375 18.75 9.82272 18.75 10.375V17.75C18.75 18.3023 18.3023 18.75 17.75 18.75H10.375C9.82272 18.75 9.375 18.3023 9.375 17.75V10.375ZM15.625 34.875C15.625 34.5989 15.4011 34.375 15.125 34.375H13C12.7239 34.375 12.5 34.5989 12.5 34.875V37C12.5 37.2761 12.7239 37.5 13 37.5H15.125C15.4011 37.5 15.625 37.2761 15.625 37V34.875Z"
        fill="#56371A"
      />
      <Path
        d="M21.875 29.125C21.875 28.5727 21.4273 28.125 20.875 28.125H7.25C6.69772 28.125 6.25 28.5727 6.25 29.125V42.75C6.25 43.3023 6.69772 43.75 7.25 43.75H20.875C21.4273 43.75 21.875 43.3023 21.875 42.75V29.125ZM9.375 32.25C9.375 31.6977 9.82272 31.25 10.375 31.25H17.75C18.3023 31.25 18.75 31.6977 18.75 32.25V39.625C18.75 40.1773 18.3023 40.625 17.75 40.625H10.375C9.82272 40.625 9.375 40.1773 9.375 39.625V32.25ZM34.375 13C34.375 12.7239 34.5989 12.5 34.875 12.5H37C37.2761 12.5 37.5 12.7239 37.5 13V15.125C37.5 15.4011 37.2761 15.625 37 15.625H34.875C34.5989 15.625 34.375 15.4011 34.375 15.125V13Z"
        fill="#56371A"
      />
      <Path
        d="M28.125 7.25C28.125 6.69772 28.5727 6.25 29.125 6.25H42.75C43.3023 6.25 43.75 6.69772 43.75 7.25V20.875C43.75 21.4273 43.3023 21.875 42.75 21.875H29.125C28.5727 21.875 28.125 21.4273 28.125 20.875V7.25ZM32.25 9.375C31.6977 9.375 31.25 9.82272 31.25 10.375V18.75H40.625V10.375C40.625 9.82272 40.1773 9.375 39.625 9.375H32.25ZM25 25V31.25H28.125V34.375H25V37.5H31.25V31.25H34.375V37.5H37.5V34.375H43.75V31.25H34.375V25H25ZM31.25 31.25H28.125V28.125H31.25V31.25ZM43.75 37.5H40.625V40.625H34.375V43.75H43.75V37.5ZM31.25 43.75V40.625H25V43.75H31.25Z"
        fill="#56371A"
      />
      <Path d="M37.5 28.125H43.75V25H37.5V28.125Z" fill="#56371A" />
    </Svg>
  );
}
