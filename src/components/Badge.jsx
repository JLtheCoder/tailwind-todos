function Badge({ children }) {
  return (
    <div
      className='rounded-xl inline-block text-sm px-4 py-1 bg-black	 text-white'
    >
      {children}
    </div>
  );
}

export default Badge;
