import { Skeleton } from "@/components/ui/skeleton";


export default function Loading() {
  
  return (
    <>
      <div className="px-4 mb-12">
        <div className="pt-8 pb-4">
          <Skeleton className="w-64 h-8 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
        </div>
        <div className="flex flex-col w-full mx-auto pt-8">
          <Skeleton className="w-[375px] h-10 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
        </div>
      </div>
      <section className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 my-12">
        {[...new Array(12)].map((_, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center rounded-lg shadow-custom"
            >
              <div className="p-2">
                <Skeleton className="w-10 h-7 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
              </div>
              <div className="relative flex aspect-square w-full h-auto">
                <Skeleton className="w-[70%] h-[70%] m-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
              </div>
              <div className="flex flex-col flex-1 items-start w-full pt-0 p-4 gap-y-1">
                <div className="font-semibold text-lg w-full text-center">
                  <Skeleton className="w-[70%] h-6 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
                </div>
                <div className="w-full pt-2">
                  <Skeleton className="w-[70%] h-5 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
