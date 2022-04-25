import React, { memo } from 'react';

const BiSwapIcon = memo(
  ({ active, activeColor, color, height, width }) => (
    <svg
      height={height ?? 16}
      width={width ?? 16}
      viewBox="0 0 400 400"
      fill="none"
    >
      <g transform="translate(0)">
        <linearGradient id="Path_8498_00000101084967787936522230000005471291386862759615_" gradientUnits="userSpaceOnUse" x1="209.2924" y1="179.5424" x2="205.455" y2="200.4263" gradientTransform="matrix(11.8706 0 0 -12.0939 -2239.6458 2467.4377)">
          <stop offset="0" style={{stopColor: '#FF496A'}} />
          <stop offset="1" style={{stopColor: '#E42648'}} />          
        </linearGradient>
        <path id="Path_8498_00000105421685609756502360000015408336945959859841_" style={{fill:`url(#Path_8498_00000101084967787936522230000005471291386862759615_)`}} d="
	M349.8,79.1c-13.7,2.9-26.6,6.5-36.5,8.6c-27.8,6-48.7,29.1-51.7,57.4c-4.3,30.2,5.7,43.1,1.4,78.3c-7.8,61.8-66.8,82.6-94,95.5
	c-15.8,7.2-54.6,24.4-84,37.3c86.7,63.6,208.5,45,272.1-41.7c51.9-70.7,50.1-167.5-4.4-236.2C351.8,78.9,350.8,79.2,349.8,79.1z"/>
        <linearGradient id="Path_8499_00000069368988579689677870000016304176058613289127_" gradientUnits="userSpaceOnUse" x1="199.8008" y1="196.9113" x2="207.4495" y2="174.6699" gradientTransform="matrix(13.259 0 0 -12.8711 -2492.6223 2635.6416)">
          <stop offset="2" style={{stopColor: '#1158F1'}} />
          <stop offset="1" style={{stopColor: '#119BED'}} />          
        </linearGradient>
        <path id="Path_8499_00000173119227639985226190000005075093812782462395_" style={{fill: `url(#Path_8499_00000069368988579689677870000016304176058613289127_)`}} d="
	M177.4,171.8c8.4-20.6,15.3-41.7,20.9-63.2c14.4-38.8,58.9-27.3,71.1-25.8c20.1,2.9,25.8-4.3,68.2-11.5c2.2,0,4.3-0.7,6.5-0.7
	c-71.7-80-194.7-86.7-274.7-14.9c-19.1,17.1-34.6,37.8-45.6,60.9C88.4,132.3,157.4,166.8,177.4,171.8z M135.1,39.7
	c5.8,0.7,33,35.2,38.1,122.9c0,0-35.2-8.6-43.1-26.6C124.3,120.8,132.2,100.7,135.1,39.7z M5.1,200.5c0.2-15.2,1.9-30.4,5-45.2
	c7.8,6.3,15.2,13,22.3,20.1c51,46.7,132.8,84,163,49.5l0,0c-15.8,19.7-41.5,28.6-66.1,23l-62.5,94C27.4,305.5,5,254.2,5.1,200.5z"/>
      </g>
    </svg>
  )
);

export default BiSwapIcon;