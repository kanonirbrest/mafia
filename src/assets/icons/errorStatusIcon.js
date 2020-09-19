import React from 'react';

import { COLORS } from 'utils/colors';

const ErrorStatusIcon = ({
  color = COLORS.errorColor,
  className,
}) => (
  <svg width="12px" height="12px" viewBox="0 0 12 12" className={className} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g fill={color} fillRule="nonzero">
      <path d="M11.7020239,9.77370412 C12.0758836,10.4298311 11.6066044,11.25 10.8598976,11.25 L1.13998921,11.25 C0.391844325,11.25 -0.0752677106,10.4285596 0.297862891,9.77370412 L5.15787783,1.24187998 C5.53191989,0.585445415 6.46875681,0.586634868 6.84213047,1.24187998 L11.7020239,9.77370412 Z M6.00000415,8.00976566 C5.48543554,8.00976566 5.06829165,8.43212405 5.06829165,8.95312502 C5.06829165,9.47412599 5.48543554,9.89648439 6.00000415,9.89648439 C6.51457276,9.89648439 6.93171665,9.47412599 6.93171665,8.95312502 C6.93171665,8.43212405 6.51457276,8.00976566 6.00000415,8.00976566 Z M5.11542415,4.61888092 L5.26567292,7.4079434 C5.27270127,7.53845511 5.37928108,7.64062503 5.50836377,7.64062503 L6.49164453,7.64062503 C6.62072722,7.64062503 6.72730703,7.53845511 6.73433538,7.4079434 L6.88458415,4.61888092 C6.89217963,4.47791022 6.7813261,4.35937507 6.6418933,4.35937507 L5.35809475,4.35937507 C5.21866195,4.35937507 5.10782867,4.47791022 5.11542415,4.61888092 L5.11542415,4.61888092 Z" id="path-error-icon-danger" />
    </g>
  </svg>
);

export default ErrorStatusIcon;