export const baseStyles = {
  container: "relative flex flex-col items-start p-6 rounded-3xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
  iconContainer: "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm",
  iconImage: "w-8 h-8 object-contain", 
  title: "text-xl font-bold tracking-tight text-gray-900"
};

export const colorVariants: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100",
  orange: "bg-orange-50 border-orange-100",
  green: "bg-green-50 border-green-100",
  purple: "bg-purple-50 border-purple-100",
};

export const iconBgVariants: Record<string, string> = {
  blue: "bg-blue-500 text-white",
  orange: "bg-orange-500 text-white",
  green: "bg-green-500 text-white",
  purple: "bg-purple-500 text-white",
};