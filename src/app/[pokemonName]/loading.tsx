import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {
  
  return (
    <div className="flex flex-col items-center mt-6 p-6">
      <Skeleton className="w-[225px] h-12 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
      <div className="flex flex-col w-full lg:flex-row lg:justify-center lg:gap-x-4">
        <div>
          <div className="flex p-6 w-full h-full">
            <Skeleton className="w-[250px] h-[250px] m-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
          </div>
          <div className="p-6 pt-0">
            <Skeleton className="w-[150px] h-8 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
          </div>
        </div>
        <div className="flex flex-col max-w-[500px] w-full p-6 mx-auto lg:mx-0 lg:justify-center">
          {[...new Array(6)].map((_, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-4 p-2"
              >
                <Skeleton className="w-1/3 h-6 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
                <Skeleton className="w-1/2 h-6 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
