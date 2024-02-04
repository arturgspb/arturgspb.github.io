import { SocialLinks } from "../components/SocialLinks/SocialLinks";
import { AboutMeProjectList } from "../components/page/aboutme/ProjectList/ProjectList";

export default function Home() {
    return (
        <main className="bg-site min-h-[600px]">
            <div className="mx-auto relative">
                <div className="relative">
                    <div className="flex sm:flex-row flex-col bg-zinc-900">
                        <div className="basis-1/2 text-center sm:text-left relative">
                            <div className="px-10 sm:px-14 py-6 bg-site" data-testid="home.header">
                                <h1 className="text-5xl font-bold sm:text-[120px] leading-none animate-fade-in">
                                    Dev<br />
                                    QA<br />
                                    DevOps
                                </h1>
                                <h3 className="text-base sm:text-2xl py-6">
                                    c
                                    &nbsp;
                                    <span className="text-purple-500">Артур Геращенко</span>
                                </h3>
                                <div className="flex text-gray-700 gap-4 justify-center sm:justify-start"
                                     style={{ background: '#fff' }}>

                                    <SocialLinks kind={'self'}/>
                                </div>
                            </div>
                            <div className="bg-zinc-900 h-[75px] w-full"/>
                        </div>
                        <div className="basis-1/2">
                            <img
                                alt="TALI$A" loading="lazy" width="1000" height="800"
                                decoding="async"
                                data-nimg="1"
                                className="w-full px-10 sm:px-0"
                                src="/ava.png"/>
                        </div>
                    </div>
                </div>

                <AboutMeProjectList />
            </div>
        </main>
    );
}
