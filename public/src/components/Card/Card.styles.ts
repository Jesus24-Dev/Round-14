export const baseStyles = {
  container: "relative flex flex-col items-center p-6 rounded-3xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
  iconContainer: "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm",
  iconImage: "w-8 h-8 object-contain", 
  title: "text-xl font-bold tracking-tight text-gray-900"
};

export const colorVariants: Record<string, string> = {
  blue: "bg-blue-200 border-blue-300",
  orange: "bg-orange-200 border-orange-300",
  green: "bg-green-200 border-green-300",
  purple: "bg-purple-200 border-purple-300",
  red: "bg-red-200 border-red-300",
};

export const iconBgVariants: Record<string, string> = {
  blue: "bg-blue-500 text-white",
  orange: "bg-orange-500 text-white",
  green: "bg-green-500 text-white",
  purple: "bg-purple-500 text-white",
  red: "bg-red-500 text-white",
};