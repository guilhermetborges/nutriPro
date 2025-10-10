import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero(){
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">

                <main className="max-w-5xl mx-auto flex items-center justify-center">
                    <article className="w-full lg:w-1/2 space-y-4 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-gray-800 pb-4">
                            Os melhores profissionais em um unico local
                        </h1>
                        <p className="text-lg text-gray-600 pb-6">
                            a melhor plataforma para nutricionistas e clinicas
                        </p>

                        <Button className="bg-emerald-600 hover:bg-green-700 px-6 font-semibold w-fit pb-1">
                            Clinicas disponiveis
                        </Button>

                    </article>
                    
                    <div className="hidden lg:block">
                        <Image
                        src="/nutri.jpg"
                        alt="hero"
                        width={500}
                        height={500}
                        quality={100}
                        priority
                        
                        />
                    </div>
                </main>

            </div>            
        </section>
    )
}