import React, { memo } from 'react';

const ElkFinanceIcon = memo(
  ({ active, activeColor, color, height, width }) => (
    <svg
      height={height ?? 16}
      width={width ?? 16}
      viewBox="0 0 512 512"        
      fill="none"
    >      
    <g transform='translate(0)'>
      <path d="M255.957 507.599C394.935 507.599 507.599 394.935 507.599 255.957C507.599 116.979 394.935 4.31494 255.957 4.31494C116.979 4.31494 4.31494 116.979 4.31494 255.957C4.31494 394.935 116.979 507.599 255.957 507.599Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M255.957 8.62982C119.362 8.62982 8.6297 119.362 8.6297 255.957C8.6297 392.552 119.362 503.284 255.957 503.284C392.552 503.284 503.284 392.552 503.284 255.957C503.284 119.362 392.552 8.62982 255.957 8.62982ZM0 255.957C0 114.596 114.596 0.00012207 255.957 0.00012207C397.318 0.00012207 511.914 114.596 511.914 255.957C511.914 397.318 397.318 511.914 255.957 511.914C114.596 511.914 0 397.318 0 255.957Z" fill="#231F20"/>
      <path d="M255.957 473.684C376.204 473.684 473.684 376.204 473.684 255.957C473.684 135.709 376.204 38.2295 255.957 38.2295C135.709 38.2295 38.2295 135.709 38.2295 255.957C38.2295 376.204 135.709 473.684 255.957 473.684Z" fill="#009F55"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M255.957 46.8592C140.475 46.8592 46.8593 140.475 46.8593 255.957C46.8593 371.438 140.475 465.054 255.957 465.054C371.438 465.054 465.054 371.438 465.054 255.957C465.054 140.475 371.438 46.8592 255.957 46.8592ZM29.5999 255.957C29.5999 130.943 130.943 29.5998 255.957 29.5998C380.97 29.5998 482.314 130.943 482.314 255.957C482.314 380.97 380.97 482.314 255.957 482.314C130.943 482.314 29.5999 380.97 29.5999 255.957Z" fill="#231F20"/>
      <path d="M350.205 353.957C347.866 355.594 344.65 356.705 340.556 357.29C336.696 357.875 333.89 357.758 332.135 356.939C331.667 356.705 331.199 355.887 330.732 354.483C330.381 352.963 329.913 351.91 329.328 351.325C329.094 351.091 328.802 350.916 328.451 350.799C323.773 348.226 318.744 346.004 313.364 344.133C300.732 339.454 287.691 336.589 274.241 335.536C267.341 319.045 263.598 310.039 263.013 308.519C258.92 298.11 257.633 292.145 259.154 290.625L391.082 158.697C391.9 157.878 394.415 158.054 398.625 159.223C402.953 160.51 405.701 161.855 406.871 163.258C408.157 164.779 410.029 168.521 412.485 174.486C415.058 180.334 417.689 184.603 420.379 187.293C423.888 190.802 430.028 193.784 438.8 196.24C446.987 198.345 451.49 200.275 452.309 202.029C454.18 205.772 455.233 213.023 455.467 223.783C455.934 234.544 455.291 241.269 453.537 243.959C452.718 245.245 449.794 245.947 444.765 246.064C439.853 246.298 436.636 245.654 435.116 244.134C433.829 242.848 433.069 241.736 432.835 240.801C432.601 239.865 432.309 239.339 431.958 239.222C426.812 235.947 421.783 233.14 416.871 230.801C405.292 225.07 395.526 222.088 387.573 221.854L358.977 250.45C365.176 252.438 372.661 255.596 381.433 259.923C383.538 261.561 384.824 268.11 385.292 279.572C385.994 291.034 385.292 297.817 383.187 299.923C381.9 301.209 379.561 301.911 376.17 302.028C372.778 302.145 370.088 301.677 368.1 300.624C366.93 299.455 364.766 297.525 361.608 294.835C356.345 291.209 344.767 287.116 326.872 282.555L308.451 300.975C314.065 302.379 321.258 304.659 330.03 307.817C339.036 310.975 344.24 313.256 345.644 314.659C347.281 316.297 348.802 322.963 350.205 334.659C351.842 346.355 351.842 352.787 350.205 353.957Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M393.356 162.524L262.855 293.026C262.874 293.502 262.964 294.249 263.196 295.329C263.766 297.968 265.01 301.805 267.029 306.94L267.035 306.955L267.041 306.97C267.568 308.342 270.94 316.461 277.215 331.464C290.117 332.7 302.656 335.569 314.822 340.071C320.299 341.979 325.449 344.244 330.265 346.873C331.017 347.183 331.744 347.639 332.379 348.274C333.778 349.673 334.47 351.595 334.876 353.258C335.807 353.385 337.399 353.404 339.91 353.024L339.928 353.021L339.946 353.019C343.097 352.569 345.371 351.811 346.96 350.908C347.049 350.356 347.118 349.497 347.118 348.255C347.118 345.34 346.742 341.041 345.932 335.257L345.926 335.215L345.921 335.173C345.226 329.385 344.517 324.965 343.805 321.847C343.449 320.283 343.113 319.144 342.817 318.364C342.674 317.988 342.566 317.768 342.508 317.657C342.391 317.575 342.162 317.426 341.777 317.211C341.115 316.842 340.187 316.388 338.956 315.848C336.498 314.771 333.061 313.453 328.602 311.889L328.585 311.883L328.569 311.877C319.862 308.743 312.82 306.515 307.405 305.161L300.012 303.313L325.558 277.767L327.938 278.373C336.955 280.672 344.459 282.872 350.415 284.978C356.298 287.057 360.944 289.138 364.056 291.282L364.238 291.407L364.407 291.55C367.155 293.892 369.243 295.735 370.599 297.034C371.709 297.486 373.437 297.805 376.021 297.716C377.479 297.665 378.52 297.493 379.228 297.281C379.749 297.125 379.997 296.975 380.09 296.908C380.134 296.83 380.248 296.611 380.388 296.167C380.621 295.43 380.843 294.338 381 292.812C381.316 289.76 381.33 285.467 380.986 279.836L380.983 279.792L380.981 279.748C380.751 274.105 380.324 269.854 379.743 266.895C379.451 265.413 379.146 264.386 378.872 263.724C378.817 263.591 378.768 263.484 378.727 263.401C370.411 259.33 363.399 256.4 357.659 254.558L350.926 252.399L385.839 217.486L387.7 217.541C396.536 217.801 406.938 221.074 418.755 226.919C423.76 229.304 428.855 232.145 434.041 235.433C435.251 236.066 435.908 237.061 436.213 237.609C436.6 238.306 436.839 239.043 436.999 239.667C437.018 239.703 437.061 239.78 437.142 239.899C437.328 240.171 437.646 240.56 438.153 241.069C438.155 241.067 438.469 241.317 439.515 241.526C440.651 241.753 442.3 241.862 444.56 241.754L444.612 241.751L444.665 241.75C447.048 241.695 448.69 241.502 449.723 241.254C449.895 241.213 450.035 241.173 450.147 241.139C450.427 240.425 450.8 238.995 451.04 236.486C451.335 233.404 451.386 229.254 451.156 223.971L451.154 223.924L451.153 223.877C451.038 218.6 450.724 214.286 450.232 210.895C449.767 207.696 449.177 205.56 448.592 204.259C448.578 204.249 448.564 204.239 448.548 204.228C448.208 203.993 447.599 203.653 446.618 203.232C444.663 202.395 441.735 201.45 437.726 200.419L437.681 200.408L437.637 200.395C428.657 197.881 421.637 194.653 417.328 190.344C414.088 187.104 411.198 182.274 408.535 176.224L408.515 176.177L408.495 176.129C407.288 173.198 406.251 170.877 405.38 169.135C404.468 167.312 403.867 166.388 403.577 166.045L403.567 166.033L403.558 166.022C403.557 166.022 403.47 165.924 403.22 165.749C402.957 165.565 402.573 165.335 402.036 165.072C400.958 164.545 399.446 163.97 397.433 163.37C395.515 162.839 394.189 162.591 393.356 162.524ZM448.752 204.387C448.752 204.387 448.744 204.38 448.731 204.367C448.746 204.38 448.753 204.387 448.752 204.387ZM450.504 241.003C450.504 241.004 450.503 241.004 450.503 241.004C450.511 240.999 450.512 240.999 450.504 241.003ZM346.822 351.49C346.82 351.487 346.83 351.456 346.853 351.404C346.835 351.466 346.823 351.492 346.822 351.49ZM262.872 292.521C262.873 292.522 262.871 292.546 262.861 292.589C262.866 292.541 262.871 292.519 262.872 292.521ZM393.882 153.91C395.564 154.027 397.567 154.451 399.78 155.066L399.818 155.076L399.855 155.087C402.151 155.77 404.165 156.507 405.829 157.321C407.424 158.101 409.024 159.108 410.174 160.482C411.167 161.659 412.142 163.363 413.099 165.276C414.094 167.266 415.214 169.782 416.455 172.795C418.931 178.414 421.296 182.108 423.431 184.242C426.135 186.946 431.382 189.678 439.92 192.073C444.077 193.143 447.479 194.212 450.017 195.3C451.288 195.845 452.47 196.447 453.46 197.133C454.366 197.76 455.507 198.724 456.189 200.141C457.418 202.617 458.224 205.883 458.772 209.655C459.331 213.504 459.659 218.18 459.78 223.643C460.015 229.1 459.978 233.676 459.63 237.308C459.301 240.751 458.645 244.014 457.162 246.299C455.784 248.443 453.361 249.256 451.737 249.646C449.858 250.096 447.542 250.313 444.918 250.376C442.286 250.499 439.889 250.401 437.823 249.988C435.788 249.581 433.667 248.787 432.065 247.185C430.746 245.866 429.398 244.227 428.785 242.32C424.071 239.362 419.481 236.823 415.016 234.697L414.986 234.683L414.957 234.668C404.574 229.529 396.047 226.843 389.258 226.271L366.848 248.681C371.788 250.605 377.29 253.068 383.342 256.054L383.735 256.248L384.082 256.517C385.468 257.596 386.302 259.112 386.844 260.421C387.418 261.805 387.858 263.44 388.211 265.232C388.914 268.814 389.364 273.554 389.602 279.353C389.956 285.164 389.969 289.978 389.584 293.7C389.391 295.566 389.086 297.281 388.617 298.766C388.164 300.201 387.455 301.757 386.238 302.974C383.74 305.472 379.962 306.215 376.318 306.34C372.527 306.471 368.991 305.979 366.081 304.438L365.507 304.134L365.049 303.675C364.035 302.661 362.049 300.882 358.988 298.271C356.811 296.813 353.086 295.075 347.539 293.114C342.426 291.306 335.982 289.383 328.181 287.348L316.722 298.806C321.056 300.121 325.976 301.772 331.475 303.752C336.014 305.343 339.677 306.742 342.42 307.944C343.791 308.545 344.99 309.122 345.98 309.674C346.9 310.186 347.912 310.825 348.695 311.608C349.771 312.684 350.434 314.117 350.883 315.297C351.376 316.593 351.815 318.158 352.219 319.928C353.026 323.467 353.777 328.215 354.484 334.103C355.308 339.995 355.748 344.746 355.748 348.255C355.748 349.998 355.641 351.622 355.344 353.001C355.097 354.149 354.513 356.183 352.713 357.468L352.696 357.48L352.68 357.492C349.597 359.649 345.662 360.918 341.184 361.559C337.194 362.162 333.29 362.24 330.311 360.849L330.258 360.825L330.206 360.799C328.812 360.102 328.049 358.924 327.687 358.291C327.256 357.537 326.918 356.685 326.638 355.848L326.574 355.653L326.527 355.453C326.432 355.038 326.338 354.733 326.26 354.518C321.839 352.095 317.07 349.99 311.946 348.208L311.905 348.194L311.865 348.179C299.608 343.639 286.958 340.859 273.905 339.838L271.278 339.632L270.261 337.202C263.406 320.819 259.626 311.727 258.993 310.084C256.921 304.816 255.477 300.471 254.761 297.148C254.405 295.5 254.182 293.899 254.227 292.463C254.267 291.178 254.543 289.133 256.103 287.574L388.031 155.646C389.068 154.609 390.307 154.204 391.196 154.032C392.112 153.856 393.042 153.851 393.882 153.91Z" fill="#231F20"/>
      <path d="M165.451 354.206C167.8 355.85 171.03 356.965 175.14 357.553C179.015 358.14 181.834 358.022 183.595 357.2C184.065 356.965 184.535 356.143 185.004 354.734C185.357 353.207 185.827 352.15 186.414 351.563C186.649 351.328 186.942 351.152 187.294 351.035C191.992 348.451 197.042 346.22 202.444 344.341C215.127 339.644 228.221 336.766 241.726 335.709C248.655 319.151 252.413 310.108 253 308.582C257.11 298.13 258.402 292.141 256.875 290.614L124.408 158.147C123.586 157.324 121.061 157.501 116.833 158.675C112.488 159.967 109.728 161.317 108.554 162.727C107.262 164.253 105.383 168.011 102.917 174C100.333 179.872 97.691 184.159 94.9899 186.86C91.4669 190.383 85.3015 193.377 76.4938 195.843C68.2733 197.957 63.752 199.895 62.9299 201.657C61.051 205.414 59.9941 212.695 59.7592 223.5C59.2894 234.304 59.9353 241.056 61.6969 243.757C62.5189 245.049 65.4548 245.754 70.5046 245.871C75.4369 246.106 78.6664 245.46 80.193 243.933C81.4848 242.642 82.2481 241.526 82.483 240.586C82.7179 239.647 83.0115 239.119 83.3638 239.001C88.531 235.713 93.5807 232.894 98.513 230.546C110.139 224.791 119.945 221.797 127.931 221.562L156.644 250.275C150.42 252.271 142.904 255.442 134.096 259.787C131.982 261.431 130.69 268.008 130.221 279.516C129.516 291.025 130.221 297.836 132.335 299.95C133.626 301.242 135.975 301.947 139.381 302.064C142.786 302.182 145.487 301.712 147.484 300.655C148.658 299.481 150.831 297.543 154.001 294.842C159.286 291.201 170.912 287.091 188.88 282.511L207.376 301.007C201.739 302.416 194.517 304.706 185.709 307.877C176.667 311.048 171.441 313.338 170.031 314.747C168.387 316.391 166.861 323.085 165.451 334.829C163.807 346.572 163.807 353.031 165.451 354.206Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M124.293 153.463C125.185 153.635 126.43 154.042 127.471 155.083L259.939 287.551C261.505 289.116 261.782 291.17 261.822 292.461C261.867 293.902 261.643 295.509 261.286 297.164C260.567 300.501 259.117 304.864 257.037 310.154C256.4 311.805 252.605 320.934 245.723 337.382L244.701 339.822L242.064 340.029C228.957 341.055 216.256 343.846 203.948 348.404L203.908 348.419L203.867 348.433C198.723 350.222 193.934 352.336 189.495 354.769C189.416 354.985 189.322 355.291 189.226 355.708L189.18 355.909L189.115 356.104C188.834 356.945 188.494 357.8 188.062 358.557C187.698 359.193 186.932 360.376 185.533 361.075L185.48 361.102L185.427 361.126C182.436 362.522 178.516 362.444 174.508 361.839C170.013 361.195 166.062 359.921 162.967 357.755L162.95 357.743L162.933 357.731C161.126 356.441 160.539 354.398 160.291 353.246C159.993 351.862 159.886 350.231 159.886 348.481C159.886 344.957 160.328 340.187 161.155 334.27C161.865 328.358 162.619 323.591 163.429 320.037C163.835 318.26 164.276 316.689 164.771 315.387C165.221 314.203 165.888 312.764 166.968 311.684C167.754 310.897 168.771 310.256 169.694 309.741C170.688 309.187 171.892 308.608 173.269 308.005C176.023 306.798 179.701 305.393 184.258 303.795C189.779 301.807 194.72 300.15 199.071 298.829L187.566 287.324C179.733 289.368 173.262 291.299 168.129 293.113C162.559 295.083 158.819 296.828 156.632 298.292C153.559 300.913 151.565 302.7 150.547 303.718L150.087 304.179L149.511 304.484C146.589 306.031 143.038 306.525 139.231 306.394C135.573 306.268 131.78 305.522 129.271 303.014C128.049 301.792 127.337 300.229 126.882 298.789C126.411 297.298 126.105 295.576 125.911 293.702C125.525 289.964 125.538 285.13 125.894 279.296C126.133 273.473 126.584 268.714 127.291 265.118C127.644 263.318 128.086 261.677 128.662 260.287C129.207 258.973 130.044 257.45 131.436 256.367L131.784 256.097L132.179 255.902C138.256 252.904 143.78 250.431 148.741 248.499L126.239 225.997C119.422 226.572 110.86 229.269 100.435 234.429L100.405 234.443L100.376 234.457C95.892 236.592 91.2836 239.142 86.5504 242.112C85.9349 244.027 84.581 245.672 83.2566 246.997C81.648 248.605 79.5183 249.403 77.4756 249.811C75.401 250.226 72.9934 250.324 70.3513 250.201C67.7166 250.138 65.3905 249.92 63.5042 249.467C61.8732 249.076 59.441 248.26 58.0569 246.107C56.5684 243.813 55.9092 240.537 55.5785 237.08C55.2297 233.433 55.1919 228.837 55.4287 223.358C55.5493 217.873 55.8794 213.178 56.4405 209.313C56.9904 205.525 57.8005 202.246 59.0347 199.759C59.7191 198.337 60.8644 197.37 61.774 196.74C62.7685 196.052 63.9549 195.447 65.2308 194.9C67.7799 193.807 71.1952 192.734 75.3692 191.659C83.9424 189.254 89.2112 186.511 91.9264 183.796C94.0692 181.653 96.4442 177.944 98.9308 172.302C100.177 169.277 101.301 166.751 102.301 164.752C103.261 162.832 104.24 161.121 105.237 159.939C106.392 158.559 107.999 157.549 109.6 156.765C111.271 155.948 113.293 155.207 115.598 154.522L115.636 154.511L115.673 154.501C117.896 153.883 119.907 153.458 121.596 153.34C122.44 153.281 123.373 153.286 124.293 153.463ZM118.03 162.839C116.009 163.441 114.491 164.019 113.409 164.548C112.869 164.812 112.484 165.042 112.22 165.227C111.969 165.404 111.881 165.502 111.881 165.502L111.872 165.513L111.861 165.525C111.57 165.87 110.966 166.797 110.051 168.628C109.176 170.376 108.135 172.707 106.923 175.65L106.903 175.698L106.882 175.745C104.209 181.821 101.307 186.67 98.0535 189.923C93.7271 194.25 86.6784 197.491 77.662 200.015L77.6175 200.028L77.5728 200.039C73.547 201.075 70.607 202.023 68.6441 202.864C67.6594 203.286 67.0475 203.628 66.7062 203.864C66.6906 203.875 66.676 203.886 66.6623 203.895C66.0747 205.202 65.4818 207.346 65.0156 210.558C64.5213 213.963 64.2059 218.295 64.0907 223.594L64.0896 223.641L64.0876 223.688C63.857 228.992 63.908 233.159 64.2041 236.254C64.4451 238.774 64.8198 240.209 65.1011 240.926C65.2129 240.961 65.3534 241 65.5264 241.042C66.5636 241.291 68.2119 241.484 70.6053 241.54L70.658 241.541L70.7106 241.543C72.9802 241.652 74.6351 241.543 75.7762 241.314C76.821 241.105 77.1385 240.856 77.1437 240.856C77.6531 240.345 77.9721 239.954 78.1587 239.681C78.2406 239.562 78.2833 239.485 78.302 239.448C78.4633 238.821 78.7031 238.082 79.0921 237.381C79.3977 236.831 80.0574 235.832 81.2721 235.197C86.4798 231.895 91.5961 229.042 96.6209 226.648C108.486 220.778 118.932 217.492 127.803 217.231L129.672 217.176L164.728 252.232L157.967 254.4C152.203 256.249 145.163 259.192 136.813 263.279C136.772 263.363 136.723 263.47 136.667 263.603C136.392 264.268 136.085 265.299 135.793 266.788C135.21 269.759 134.781 274.027 134.55 279.693L134.548 279.737L134.545 279.781C134.199 285.435 134.213 289.746 134.53 292.811C134.689 294.343 134.911 295.439 135.145 296.179C135.285 296.625 135.4 296.845 135.444 296.923C135.538 296.99 135.787 297.141 136.31 297.298C137.02 297.511 138.066 297.684 139.53 297.734C142.125 297.824 143.86 297.504 144.974 297.05C146.335 295.745 148.432 293.895 151.192 291.544L151.361 291.4L151.544 291.274C154.668 289.121 159.334 287.032 165.24 284.944C171.221 282.83 178.756 280.621 187.81 278.313L190.2 277.704L215.85 303.354L208.427 305.21C202.989 306.57 195.919 308.806 187.177 311.954L187.16 311.96L187.143 311.966C182.666 313.536 179.215 314.859 176.747 315.941C175.511 316.483 174.579 316.938 173.914 317.309C173.527 317.525 173.298 317.675 173.18 317.757C173.121 317.868 173.013 318.09 172.87 318.467C172.572 319.25 172.235 320.394 171.877 321.964C171.163 325.095 170.451 329.533 169.753 335.345L169.748 335.387L169.742 335.429C168.929 341.237 168.551 345.553 168.551 348.481C168.551 349.728 168.621 350.59 168.71 351.144C170.305 352.051 172.588 352.812 175.753 353.264L175.771 353.266L175.789 353.269C178.31 353.651 179.909 353.632 180.844 353.503C181.251 351.834 181.946 349.904 183.35 348.5C183.988 347.862 184.718 347.404 185.473 347.092C190.309 344.453 195.48 342.178 200.979 340.263C213.195 335.743 225.785 332.861 238.74 331.621C245.041 316.556 248.426 308.404 248.956 307.027L248.962 307.011L248.968 306.996C250.995 301.841 252.245 297.988 252.816 295.338C253.05 294.254 253.14 293.504 253.159 293.025L122.124 161.99C121.287 162.057 119.956 162.306 118.03 162.839ZM253.142 292.518C253.143 292.517 253.148 292.538 253.153 292.586C253.143 292.543 253.141 292.519 253.142 292.518ZM168.849 351.728C168.847 351.731 168.836 351.705 168.817 351.642C168.841 351.694 168.85 351.726 168.849 351.728ZM66.501 204.023C66.5005 204.023 66.507 204.017 66.522 204.004C66.5089 204.017 66.5015 204.023 66.501 204.023Z" fill="#231F20"/>
    </g>    
    </svg>
  )
);

export default ElkFinanceIcon;