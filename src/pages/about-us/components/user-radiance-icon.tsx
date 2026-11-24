

const UserRadianceIcon = ({ size = 64, color = "#B8860B", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* The User Silhouette */}
      <path d="M18 19c0-2.209-2.686-4-6-4s-6 1.791-6 4" />
      <circle cx="12" cy="9" r="4" />

      {/* The Diagonal Rays */}
      <line x1="4" y1="4" x2="6" y2="2" />
      <line x1="9" y1="3" x2="11" y2="1" />
      <line x1="14" y1="3" x2="16" y2="1" />
      <line x1="19" y1="5" x2="21" y2="3" />
      
      <line x1="2" y1="9" x2="4" y2="7" />
      <line x1="20" y1="10" x2="22" y2="8" />
      
      <line x1="2" y1="15" x2="4" y2="13" />
      <line x1="20" y1="16" x2="22" y2="14" />
    </svg>
  );
};

export default UserRadianceIcon;