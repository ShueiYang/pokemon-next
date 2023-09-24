import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export default function Loading() {
  
  return (
    <>
      <div className="px-4 mb-12">
        <div className="pt-8 pb-4">
          <Skeleton className="w-64 h-8 mx-auto bg-[#0d9488] dark:bg-[#3f3f46]" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[15%] text-slate-300">Category</TableHead>
              <TableHead className="w-[25%] text-slate-300">
                Effect description
              </TableHead>
              <TableHead className="text-slate-300">Typelist</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...new Array(4)].map((_, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-slate-50 md:text-lg">
                  <Skeleton className="w-24 h-6 bg-[#0d9488] dark:bg-[#3f3f46]" />
                </TableCell>
                <TableCell className="text-slate-50 md:text-lg">
                  <Skeleton className="w-[200px] h-6 bg-[#0d9488] dark:bg-[#3f3f46]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-6 bg-[#0d9488] dark:bg-[#3f3f46]" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
