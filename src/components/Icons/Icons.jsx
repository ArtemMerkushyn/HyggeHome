import PropTypes from 'prop-types';

const Icons = ({ icon }) => {
  const icons = {

    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="60" viewBox="0 0 88 60" fill="none">
        <path d="M31.6443 0.513405C30.9154 0.215283 30.3456 0.11283 29.657 0.513405C28.3328 1.28374 28.5765 2.95318 29.657 4.10508C30.4118 4.90976 32.2558 5.47313 32.2558 5.47313L41.7339 18.8131V23.9438L42.6511 23.0887V18.129L33.3259 4.78903C33.3259 4.78903 33.1758 1.13976 31.6443 0.513405Z" fill="#252525"/>
        <path d="M56.5627 0.513405C57.2916 0.215283 57.8615 0.11283 58.55 0.513405C59.8742 1.28374 59.172 2.78216 58.0915 3.93405C57.3367 4.73873 55.9512 5.47313 55.9512 5.47313L46.4731 18.8131V23.9438L45.5559 23.0887V18.129L54.8811 4.78903C54.8811 4.78903 55.0312 1.13976 56.5627 0.513405Z" fill="#252525"/>
        <ellipse cx="38.2182" cy="1.71025" rx="1.52872" ry="1.71025" fill="#FCB654"/>
        <ellipse cx="38.2182" cy="1.71025" rx="1.52872" ry="1.71025" fill="#FCB654"/>
        <ellipse cx="3.72893" cy="3.40042" rx="3.72893" ry="3.40042" transform="matrix(-0.268312 0.963332 -0.94427 -0.329172 38.6143 20.709)" fill="#FCB654"/>
        <ellipse cx="3.72893" cy="3.40042" rx="3.72893" ry="3.40042" transform="matrix(-0.268312 0.963332 -0.94427 -0.329172 38.6143 20.709)" fill="#FCB654"/>
        <ellipse cx="41.2754" cy="9.23517" rx="0.611311" ry="0.683902" fill="#FCB654"/>
        <ellipse cx="41.2754" cy="9.23517" rx="0.611311" ry="0.683902" fill="#FCB654"/>
        <path d="M36.7874 18.6418C39.1673 19.7512 41.2207 24.1146 41.2207 24.1146L40.3035 30.4425L27.1565 34.5471L15.6911 41.7302C15.6911 41.7302 13.6309 41.9145 12.3279 41.7302C4.98256 40.6912 3.84052 32.4756 0.709591 24.9697C-0.360512 22.4043 -0.105026 21.3327 0.709591 19.3259C1.89166 16.4139 4.22565 16.0762 7.13022 15.3923C16.3113 13.2305 21.0416 14.3662 31.1311 16.5895C33.7701 17.171 33.1185 16.9315 36.7874 18.6418Z" fill="#6883A0"/>
        <path d="M51.2136 18.6418C48.8337 19.7512 46.7803 24.1146 46.7803 24.1146L47.6975 30.4425L60.8445 34.5471L72.3099 41.7302C72.3099 41.7302 74.3701 41.9145 75.6731 41.7302C83.0184 40.6912 84.1605 32.4756 87.2914 24.9697C88.3615 22.4043 88.106 21.3327 87.2914 19.3259C86.1093 16.4139 83.7753 16.0762 80.8708 15.3923C71.6897 13.2305 66.9594 14.3662 56.8698 16.5895C54.2309 17.171 54.8825 16.9315 51.2136 18.6418Z" fill="#6883A0"/>
        <ellipse cx="40.052" cy="6.15701" rx="0.917233" ry="1.02615" fill="#FCB654"/>
        <ellipse cx="40.052" cy="6.15701" rx="0.917233" ry="1.02615" fill="#FCB654"/>
        <ellipse cx="42.8034" cy="12.9979" rx="0.305389" ry="0.341652" fill="#FCB654"/>
        <ellipse cx="42.8034" cy="12.9979" rx="0.305389" ry="0.341652" fill="#FCB654"/>
        <ellipse cx="1.52872" cy="1.71025" rx="1.52872" ry="1.71025" transform="matrix(-1 0 0 1 51.9766 0)" fill="#FCB654"/>
        <ellipse cx="1.52872" cy="1.71025" rx="1.52872" ry="1.71025" transform="matrix(-1 0 0 1 51.9766 0)" fill="#FCB654"/>
        <ellipse cx="0.611311" cy="0.683902" rx="0.611311" ry="0.683902" transform="matrix(-1 0 0 1 48.002 8.55127)" fill="#FCB654"/>
        <ellipse cx="0.611311" cy="0.683902" rx="0.611311" ry="0.683902" transform="matrix(-1 0 0 1 48.002 8.55127)" fill="#FCB654"/>
        <ellipse cx="0.917233" cy="1.02615" rx="0.917233" ry="1.02615" transform="matrix(-1 0 0 1 49.5303 5.13086)" fill="#FCB654"/>
        <ellipse cx="0.917233" cy="1.02615" rx="0.917233" ry="1.02615" transform="matrix(-1 0 0 1 49.5303 5.13086)" fill="#FCB654"/>
        <ellipse cx="0.305389" cy="0.341652" rx="0.305389" ry="0.341652" transform="matrix(-1 0 0 1 46.167 12.6562)" fill="#FCB654"/>
        <ellipse cx="0.305389" cy="0.341652" rx="0.305389" ry="0.341652" transform="matrix(-1 0 0 1 46.167 12.6562)" fill="#FCB654"/>
        <path d="M40.8086 50.6236V30.1006C40.8086 30.1006 23.5038 33.5906 15.4318 41.3882C14.3769 42.4073 13.3856 42.6932 12.833 44.1246C12.1166 45.9804 12.8433 47.3492 13.4445 49.2554C15.0457 54.3321 18.9048 55.272 23.2283 57.6356C25.1808 58.703 26.272 59.5363 28.426 59.8589C29.6686 60.0451 30.3942 60.0497 31.6363 59.8589C32.928 59.6606 33.6636 59.4461 34.8466 58.8328C38.1966 57.0959 40.8086 50.6236 40.8086 50.6236Z" fill="#FCB654"/>
        <path d="M47.3896 50.6236V30.1006C47.3896 30.1006 64.6944 33.5906 72.7664 41.3882C73.8213 42.4073 74.8126 42.6932 75.3652 44.1246C76.0817 45.9804 75.355 47.3492 74.7538 49.2554C73.1526 54.3321 69.2934 55.272 64.9699 57.6356C63.0175 58.703 61.9262 59.5363 59.7723 59.8589C58.5297 60.0451 57.804 60.0497 56.562 59.8589C55.2702 59.6606 54.5347 59.4461 53.3517 58.8328C50.0017 57.0959 47.3896 50.6236 47.3896 50.6236Z" fill="#FCB654"/>
        <path d="M40.6637 51.9917C40.6637 51.9917 42.2684 56.6094 44.1798 56.6094C46.6257 56.6094 48.1544 52.3332 48.1544 52.3332L48.0016 26.1686C48.0016 26.1686 46.6257 22.7465 44.1798 22.7461C41.2752 22.7456 40.2051 26.1664 40.2051 26.1664V36.9409L40.6637 51.9917Z" fill="#252525"/>
      </svg>
    ),

    search: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.7747 15.8961C12.6856 16.5948 11.3901 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.3901 16.5948 12.6856 15.8961 13.7747L20.5607 18.4393C21.1464 19.0251 21.1464 19.9749 20.5607 20.5607C19.9749 21.1464 19.0251 21.1464 18.4393 20.5607L13.7747 15.8961ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z"/>
      </svg>   
    ),
    basket: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H4C5.32783 2 6.45418 2.86266 6.84916 4.05811L18.9755 4.92427C20.1511 5.00825 20.9996 6.08543 20.8058 7.24799L20.2649 10.4932C20.0238 11.9398 18.7723 13 17.3057 13H7V14C7 14.5523 7.44772 15 8 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H8C6.34315 17 5 15.6569 5 14V5C5 4.44772 4.55228 4 4 4H3C2.44772 4 2 3.55228 2 3ZM7 11H17.3057C17.7946 11 18.2118 10.6466 18.2921 10.1644L18.833 6.91919L7 6.07398V11Z"/>
        <path d="M6 22C7.10457 22 8 21.1046 8 20C8 18.8954 7.10457 18 6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22Z"/>
        <path d="M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z"/>
      </svg>
    ),
    user: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.1736 16.1545C12.7319 15.9485 11.2682 15.9485 9.82638 16.1545L8.81907 16.2984C7.20151 16.5295 6 18.081 6 19.715C6 19.8724 6.12761 20 6.28502 20H17.715C17.8724 20 18 19.8724 18 19.715C18 18.081 16.7985 16.5295 15.181 16.2984L14.1736 16.1545ZM9.54354 14.1746C11.1729 13.9418 12.8271 13.9418 14.4565 14.1746L15.4638 14.3185C18.0667 14.6903 20 17.0857 20 19.715C20 20.977 18.977 22 17.715 22H6.28502C5.02304 22 4 20.977 4 19.715C4 17.0857 5.93337 14.6903 8.53623 14.3185L9.54354 14.1746Z"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3432 4 9.00001 5.34315 9.00001 7C9.00001 8.65685 10.3432 10 12 10ZM12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23859 2 7.00001 4.23858 7.00001 7C7.00001 9.76142 9.23859 12 12 12Z"/>
      </svg>
    ),

  };

  return icons[icon];
};

Icons.propTypes = {
  icon: PropTypes.string,
};

export default Icons;
