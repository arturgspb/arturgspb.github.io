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
                    <div style={{ maxWidth: 1400, margin: '0 auto', background: '#fff', paddingBottom: '50px' }}
                         className="flex sm:flex-row flex-col bg-zinc-900"
                    >
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
                            {/*<div className="bg-zinc-900 h-[75px] w-full"/>*/}
                        </div>
                        <div className="basis-1/2 pr-14 pt-8">
                            <img
                                loading="lazy" width="500" height="400"
                                decoding="async"
                                data-nimg="1"
                                className="w-full px-10 sm:px-0"
                                src="/ava.png"/>
                        </div>
                    </div>
                </div>

                <div className={'bg-zinc-900 text-site p-8 sm:p-20'}>
                    <div className="max-w-4xl mx-auto">
                        <Box>
                            <Text className={'my-2'} color={'white'}>
                                Руководитель направления разработки в Centra.
                            </Text>
                            <Text className={'my-2'} color={'white'}>
                                Автор канала Уйти в IT:&nbsp;

                                <Link className={'text-purple-500'} href={'https://t.me/lets_goto_it'}
                                      target={'_blank'}>Телеграм</Link>,&nbsp;
                                <Link className={'text-purple-500'} href={'https://dzen.ru/lets_goto_it'}
                                      target={'_blank'}>Дзен</Link>,&nbsp;
                                <Link className={'text-purple-500'} href={'https://www.youtube.com/@lets_goto_it'}
                                      target={'_blank'}>YouTube</Link>
                            </Text>
                        </Box>
                        {/*<Box flexDirection={'row'} justifyContent={'spaceBetween'}>*/}
                        {/*    <Box>*/}
                        {/*        <iframe width="373" height="210"*/}
                        {/*                src="https://www.youtube.com/embed/bgLSn23g768?si=5wBTUhEa3QHUQMzP"*/}
                        {/*                title="YouTube video player" frameBorder="0"*/}
                        {/*                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                        {/*                allowFullScreen></iframe>*/}
                        {/*    </Box>*/}

                        {/*    <Box>*/}
                        {/*        <iframe width="373" height="210"*/}
                        {/*                src="https://www.youtube.com/embed/8y_BFAIkvZk?si=l6cdrxQdUu1zfw7N"*/}
                        {/*                title="YouTube video player" frameBorder="0"*/}
                        {/*                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
                        {/*                allowFullScreen></iframe>*/}
                        {/*    </Box>*/}
                        {/*</Box>*/}
                    </div>
                </div>

                <div className={'flex gap-2 sm:gap-14 px-14 flex-col'}>
                    <div className="pt-20 mb-20 px-8 sm:px-0 max-w-4xl mx-auto">
                        <h1 className="uppercase mb-4 font-bold text-black text-4xl sm:text-7xl text-center sm:text-left">Обо
                            мне</h1>

                        {/*<Text className={'my-2'}>*/}
                        {/*    Руководитель направления разработки в Centra.*/}
                        {/*</Text>*/}
                        {/*<Text className={'my-2'}>*/}
                        {/*    Автор канала Уйти в IT!:&nbsp;*/}

                        {/*    <Link className={'text-purple-500'} href={'https://t.me/lets_goto_it'}*/}
                        {/*          target={'_blank'}>Телеграм</Link>,&nbsp;*/}
                        {/*    <Link className={'text-purple-500'} href={'https://dzen.ru/lets_goto_it'}*/}
                        {/*          target={'_blank'}>Дзен</Link>,&nbsp;*/}
                        {/*    <Link className={'text-purple-500'} href={'https://www.youtube.com/@lets_goto_it'}*/}
                        {/*          target={'_blank'}>YouTube</Link>*/}
                        {/*</Text>*/}

                        {/*<Text>&nbsp;</Text>*/}

                        <Text className={'my-3'}>
                            С 2009 года прошел путь от разработчика, через техлида до руководителя направления
                            разработки.
                        </Text>

                        <Text className={'my-3'}>
                            Как разработчик выполнял проекты с нуля, работал с легаси, распиливал монолиты на
                            микросервисы и сервисы.
                            Учавствовал в процессе найма в существующие команды.
                        </Text>

                        <Text className={'my-3'}>
                            Как руководитель полностью собрал команду и наладил процессы разработки.
                            Внедрил процессы декомпозиции и оценки задач, ci/cd, testops, codereview и design review.
                        </Text>

                        <Text className={'my-3'}>
                            Имею обширный опыт разработки под рекламный рынок -
                            генерация и управление рекламой (работа с отечественными и зарубежными системами через API),
                            разрабатывал ETL системы для скачивания статистики и хранения больших данных в ClickHouse и
                            Google BigQuery.
                        </Text>

                        <Text className={'my-3'}>
                            В работе с командой использую менторинг, мотивационные мероприятия,
                            one2one-ы, дейли/планерки, ректроспективы, ИПР-ы, codereview, и пр.
                            Неплохо расставляю приоритеты, защищая не только бизнес от ненужного рефакторинга, но и
                            команду он бесконечно нарастающего техдолга.
                        </Text>

                        <Text className={'my-3'}>
                            В работе придерживаюсь стиля управления мягкой силой, при этом публично продвигая в команде
                            идеи,
                            что бизнес платит деньги не столько за код как таковой, а скорее
                            за возможности, которые он получает за счет отдела разработки. Например: гибкость,
                            скорость внедрений, ориентация на результат.

                            Испытываю особую симпатию к инфраструктурному и платформенному направлению работы.
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
