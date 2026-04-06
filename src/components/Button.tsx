type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        backgroundColor: "#ff4d4d", 
        color: "#fff", 
        padding: "15px 30px", 
        border: "none", 
        borderRadius: "8px", 
        cursor: "pointer",
        fontSize: "18px"
      }}
    >
      {text}
    </button>
  );
}