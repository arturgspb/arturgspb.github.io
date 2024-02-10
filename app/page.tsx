import { SocialLinks } from "../components/SocialLinks/SocialLinks";
import { AboutMeProjectList } from "../components/page/aboutme/ProjectList/ProjectList";
import { Text } from "../components/atoms/Text/Text";
import { Box } from "../components/atoms/Box/Box";
import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-site min-h-[600px]">
            <div className="mx-auto relative">
                <div className="relative">
                    <div className="flex sm:flex-row flex-col bg-zinc-900">
                        <div className="basis-1/2 text-center sm:text-left relative">
                            <div className="px-10 sm:px-14 py-6 bg-site" data-testid="home.header">
                                <h1 className="text-5xl font-bold sm:text-[120px] leading-none animate-fade-in">
                                    Dev<br/>
                                    QA<br/>
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

                <div className={'bg-zinc-900 text-site pt-16 sm:p-20'}>
                    <div className="mb-8 px-8 sm:px-0 max-w-4xl mx-auto">
                        <Box flexDirection={'row'} justifyContent={'spaceBetween'}>
                            <Box>
                                <iframe width="373" height="210"
                                        src="https://www.youtube.com/embed/bgLSn23g768?si=5wBTUhEa3QHUQMzP"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </Box>

                            <Box>
                                <iframe width="373" height="210"
                                        src="https://www.youtube.com/embed/8y_BFAIkvZk?si=l6cdrxQdUu1zfw7N"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </Box>
                        </Box>
                    </div>
                </div>

                <div className={'flex gap-2 sm:gap-14 px-14 flex-col'}>
                    <div className="pt-20 mb-20 px-8 sm:px-0 max-w-4xl mx-auto">
                        <h1 className="uppercase mb-4 font-bold text-black text-4xl sm:text-7xl text-center sm:text-left">Обо
                            мне</h1>

                        <Text className={'my-2'}>
                            Руководитель направления разработки в Centra.
                        </Text>
                        <Text className={'my-2'}>
                            Автор канала Уйти в IT!:&nbsp;

                            <Link className={'text-purple-500'} href={'https://t.me/lets_goto_it'}
                                  target={'_blank'}>Телеграм</Link>,&nbsp;
                            <Link className={'text-purple-500'} href={'https://dzen.ru/lets_goto_it'}
                                  target={'_blank'}>Дзен</Link>,&nbsp;
                            <Link className={'text-purple-500'} href={'https://www.youtube.com/@lets_goto_it'}
                                  target={'_blank'}>YouTube</Link>
                        </Text>

                        <Text>&nbsp;</Text>

                        <Text className={'my-2'}>
                            С 2009 года прошел путь от разработчика, через техлида до руководства всей IT-частью.
                        </Text>
                        {/*В команде разработчики, qa, саппорт и devops-ы. Кроме этого взаимодействую с аутсорс-ресурсами.*/}
                        <Text className={'my-2'}>
                            Есть обширный опыт в разработке и поддержке систем
                            генерации и управления рекламой (работа с шадрированным и партицированным Postgres на
                            несколько TB), ETL системами для перегрузки
                            данных (много сотни GB в сутки), CRM (почти ERP).
                        </Text>
                        <Text className={'my-2'}>
                            Программирование люблю, при этом считаю своей точкой роста
                            именно управление. Из направлений
                            в разработке особенно нравится инфраструктура.
                        </Text>
                    </div>
                </div>

                <div className={'bg-zinc-900 text-site pt-16 sm:p-20'}>
                    <div className="mb-8 px-8 sm:px-0 max-w-4xl mx-auto">
                        <h1 className="uppercase mb-4 font-bold text-white text-4xl sm:text-7xl text-center sm:text-left">Проекты</h1>
                        <Text color={'white'}>Это часть проектов, над которыми я работал в последнее время</Text>

                        <AboutMeProjectList/>
                    </div>
                </div>
            </div>
        </main>
    );
}
