import { Button } from "../../../atoms/Button/Button";

export const AboutMeProjectList = () => {
    return (
        <div className={'bg-zinc-900 text-site pt-16 sm:p-20'}>
            <div className="px-8 sm:px-0 max-w-4xl mx-auto" data-testid="tickets.container">
                <h1 className="uppercase font-bold text-white text-4xl sm:text-7xl text-center sm:text-left">Проекты</h1>
                <div className="py-10">
                    <div data-testid="ticket-item.container"
                         className="group/event flex border-b last:border-0 hover:border-purple-500 gap-4 sm:gap-8 flex-col sm:flex-row py-4 sm:py-0 transition-colors duration-300">
                        <div
                            className="flex flex-1 sm:items-center gap-4 sm:gap-4 md:gap-8 flex-col sm:flex-row sm:py-3">
                            <div
                                className="sm:group-hover/event:overflow-hidden transition-all duration-300 ease-out w-full max-w-fit sm:group-hover/event:w-0">
                                <div
                                    className="flex flex-col min-w-fit sm:flex-row overflow-hidden sm:gap-4 md:gap-8 relative">
                                    <div
                                        className="w-[310px] h-[171px] sm:w-[80px] sm:h-[80px] overflow-hidden sm:group-hover/event:opacity-0 transition-opacity duration-300">
                                        <div className="flex items-center justify-center h-full">
                                            <div className="overflow-hidden relative group w-full h-full">
                                                {/*<img*/}
                                                {/*alt="no info available for image" loading="lazy" width="300"*/}
                                                {/*height="300" decoding="async" data-nimg="1"*/}
                                                {/*className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out undefined"*/}
                                                {/*style="color:transparent"*/}
                                                {/*srcSet="/_next/image?url=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F11062b_f9d86aa23f474aaf9fefd4f6468b51f6~mv2.jpg%2Fv1%2Ffill%2Fw_300%2Ch_300%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_auto%2F11062b_f9d86aa23f474aaf9fefd4f6468b51f6~mv2.jpg&amp;w=384&amp;q=90 1x, /_next/image?url=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F11062b_f9d86aa23f474aaf9fefd4f6468b51f6~mv2.jpg%2Fv1%2Ffill%2Fw_300%2Ch_300%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_auto%2F11062b_f9d86aa23f474aaf9fefd4f6468b51f6~mv2.jpg&amp;w=640&amp;q=90 2x"*/}
                                                {/*src="/_next/image?url=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F11062b_f9d86aa23f474aaf9fefd4f6468b51f6~mv2.jpg%2Fv1%2Ffill%2Fw_300%2Ch_300%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_auto%2F11062b_f9d86aa23f474aaf9fefd4f6468b51f6~mv2.jpg&amp;w=640&amp;q=90" />*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex gap-4 items-center absolute bottom-2 left-2 sm:bottom-auto sm:left-auto sm:relative">
                                        <span className="text-4xl text-white">05</span>
                                        <div className="flex flex-col text-xs">
                                            <span className="text-white sm:text-gray-600">Fri</span><span>Mar</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grow flex flex-col hover:text-purple-500">
                                <button className="text-left text-white w-full h-full group/button text-2xl text-left">
                                    Chicago
                                    <svg fill="none"
                                         className="w-4 h-4 inline ml-3 opacity-0 group-hover/button:opacity-100 "
                                         stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                    </svg>
                                </button>
                                <div className="text-sm text-white text-site transition-all ease-in pointer-events-none opacity-0 h-0">
                                    <p>Desc 0</p>
                                    <p>Desc 1</p>
                                    <p className="mt-3">Desc 3</p>
                                </div>
                            </div>
                        </div>
                        <Button href={'/'} target={'_blank'}>
                            Перейти на сайт
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}