import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  title: string;
  issuer: string;
  dates: string;
  image?: string;
  className?: string;
}

export function AchieviementCertificationCard({
  title,
  issuer,
  dates,
  image,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <div className={cn(className)}>
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-auto w-full overflow-hidden object-cover object-top"
          />
        )}
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <div className="w-full flex items-center justify-between">
            <time className="font-sans text-xs">{issuer}</time>
            <time className="font-sans text-xs">{dates}</time>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
