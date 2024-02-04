/**
 * Построение css классов для Box, Button и пр. исходя из их пропсов
 */
export const buildCssClasses = (
    styled: { [x: string]: string },
    classPostfix: { [prefix: string]: string | undefined },
    additionalClassName?: string,
    autoAddRootClass: boolean = true,
) => {
    const classes = []
    if (autoAddRootClass && styled.root) {
        classes.push(styled.root);
    }

    const genClasses = Object.entries(classPostfix).map(([key, value]) => {
        if (typeof value === 'string') {
            return styled[`${key}_${value}`];
        }
    }).filter((c) => c);
    classes.push(...genClasses);

    if (additionalClassName) {
        classes.push(additionalClassName);
    }

    return classes.join(' ');
}