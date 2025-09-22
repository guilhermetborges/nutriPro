import { CardContent, CardFooter, CardHeader, Card, CardTitle,CardDescription,CardAction } from "@/components/ui/card";
import nutri from "../../../../public/nutri.jpg"
import Image from "next/image";
import  Link  from "next/link";

    
export function Professionals() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-emerald-600 text-center">
                    Clinicas disponiveis
                </h2>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3">
                    <Card className="overflow-hidden">
                       <CardContent className="p-0">
                        <div>
                            <div className="relative h-48 ">
                                <Image
                                    src={nutri}
                                    alt="hero"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                    priority
                                    
                                    />
                            </div>
                        </div>
                        <div className="mt-4 p-4 space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Clinica x
                                    </h3>
                                    <p className="text-sm text-gray-700 mt-1 font-semibold">
                                        rua 190 ex cidade
                                    </p>
                                </div>
                                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full">
                                </div>
                            </div>
                            <Link
                            href="/contatos"
                            className="w-full bg-emerald-600 text-white hover:bg-green-700 px-7 py-2 rounded-md text-sm md:text-base font-medium  flex  items-center justify-center">
                            Agendar Horario
                            </Link>
                        </div>
                       </CardContent>
                    </Card>

                </section>
            </div>

        </section>

    );
}