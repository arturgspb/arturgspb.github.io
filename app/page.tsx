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
                    </div>
                </div>

                <div className={'flex gap-2 sm:gap-14 px-14 flex-col'}>
                    <div className="pt-20 mb-20 px-8 sm:px-0 max-w-4xl mx-auto">
                        <h1 className="uppercase mb-4 font-bold text-black text-4xl sm:text-7xl text-center sm:text-left">Обо
                            мне</h1>

                        <Text className={'my-5'}>
                            С 2009 года прошел путь от фулстек разработчика, через техлида до руководителя направления
                            разработки.
                        </Text>

                        <Text className={'my-5'}>
                            <b>Как разработчик</b> начинал с PHP + MySQL + Vanilla js и выполнял проекты с нуля, а также подключался к уже готовым проектам
                            разной степени зрелости.
                            Застал появление и внедрял в проекты jQuery, потом AngularJS, а потом переписывал React.
                            Дважды переводил проекты с MySQL на PostgreSQL, распиливал PHP монолит на сервисы Java/Python.
                            Застал рождение gRPC как технологии и переводил сервисы на него.
                            Застал бум на Agile и понимаю, чем он хорош, а чем плох для разных типов проектов.
                            Учавствовал в процессе найма в существующие команды.
                        </Text>

                        <Text className={'my-5'}>
                            <b>Как руководитель</b> полностью собрал команду (backend, frontend, qa) и наладил процессы планирования, разработки, отладки, тестирования и доставки релизов.
                            Процесс разработки включает в себя: декомпозицию и оценку задач, ci/cd, code review, design review, авто-тесты на selenium и ручные тесты силами QA инженеров.
                        </Text>

                        <Text className={'my-5'}>
                            <b>Менеджмент команды.&nbsp;</b>
                            В работе с командой использую менторинг, мотивационные мероприятия,
                            one2one-ы, дейли/планерки, ректроспективы, ИПР-ы, codereview, и пр.
                            Неплохо расставляю приоритеты, защищая не только бизнес от ненужного рефакторинга, но и
                            команду он бесконечно нарастающего техдолга.
                        </Text>

                        <Text className={'my-5'}>
                            <b>Бизнес направленность.&nbsp;</b>
                            В работе придерживаюсь стиля управления мягкой силой, при этом публично продвигая в команде
                            идеи, что бизнес платит деньги не столько за код как таковой, а скорее
                            за возможности, которые он получает за счет отдела разработки. Например: гибкость,
                            скорость внедрений, ориентация на результат.

                            Испытываю особую симпатию к инфраструктурному и платформенному направлению работы.
                        </Text>


                        <Text className={'my-5'}>
                            <b>Реклама и большие данные.&nbsp;</b>
                            Имею обширный опыт разработки под рекламный рынок:
                            <ul className={'list-disc list-inside'}>
                                <li className={'my-1'}>Генерация рекламных объявлений на основе xml/json товарного фида клиента и управление рекламой через API. Работал как с отечественными площадками (Яндекс.Директ, ВКонтакте/VK), так и зарубежными системами (Google Ads и другие крупные). В рамках этого проекта реализовал механизм шардинга PostgreSQL на БД ~1.5TB на несколько серверов + посхемное разбиение, что позволило на порядки ускорить работу сервиса.</li>
                                <li className={'my-1'}>Разрабатывал ETL систему для скачивания статистики и хранения больших данных в ClickHouse и
                                    Google BigQuery, а также загрузки статистики о транзакциях в аналитические системы типа Яндекс.Метрика или Google Analytics или в базу данных клиента. В рамках этого проекта построил распределенную систему очередей и вместе с командой удалось построить дешевый по потреблению памяти внутренний фреймворк, который позволял гонять много сотен гигабайт в сутки не сильно нагружая CPU.</li>
                            </ul>
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
