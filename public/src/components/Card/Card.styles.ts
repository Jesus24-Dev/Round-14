export const baseStyles = {
  container: "relative flex flex-col items-center p-6 rounded-3xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer",
  iconContainer: "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm",
  iconImage: "w-8 h-8 object-contain", 
  title: "text-xl font-bold tracking-tight text-gray-900"
};

export const colorVariants: Record<string, string> = {
  blue: "bg-blue-200 border-blue-300 hover:bg-blue-300 active:bg-blue-400",
  orange: "bg-orange-200 border-orange-300 hover:bg-orange-300 active:bg-orange-400",
  green: "bg-green-200 border-green-300 hover:bg-green-300 active:bg-green-400",
  purple: "bg-purple-200 border-purple-300 hover:bg-purple-300 active:bg-purple-400",
  red: "bg-red-200 border-red-300 hover:bg-red-300 active:bg-red-400",
};

export const iconBgVariants: Record<string, string> = {
  blue: "bg-blue-500 text-white",
  orange: "bg-orange-500 text-white",
  green: "bg-green-500 text-white",
  purple: "bg-purple-500 text-white",
  red: "bg-red-500 text-white",
};