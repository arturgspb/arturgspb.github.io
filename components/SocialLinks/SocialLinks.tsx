import { FC } from "react";
import { Box } from "../atoms/Box/Box";

import Telegram from './_assets/filled-telegram.svg'
import Youtube from './_assets/filled-youtube.svg'
import Link from "next/link";

type TType = 'self' | 'lets_goto_it';

interface ISocialLinksProps {
    kind: TType
}

export const SocialLinks: FC<ISocialLinksProps> = ({ kind }) => {
    return (
        <Box alignItems={'center'} flexDirection={'row'}>
            {kind == 'self' && (
                <>
                    <Box>
                        <Link href={'https://t.me/arturgspb'} target={'_blank'}>
                            <Telegram/>
                        </Link>
                    </Box>
                </>
            )}
            {kind == 'lets_goto_it' && (
                <>
                    <Box>
                        <Link href={'https://t.me/lets_goto_it'} target={'_blank'}>
                            <Telegram/>
                        </Link>
                    </Box>

                    <Box>
                        <Link href={'https://www.youtube.com/@lets_goto_it'} target={'_blank'}>
                            <Youtube/>
                        </Link>
                    </Box>
                </>
            )}
        </Box>
    )
}