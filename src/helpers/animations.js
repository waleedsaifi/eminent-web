import anime from "animejs";
import {
    BREAKPOINTS
} from "../constants/constants";

export const getAnimationTimeout = (currentStep) => {
    switch (currentStep) {
        case 0:
            return 6000;
        case 1:
        case 2:
        case 6:
        case 7:
        case 8:
        case 9:
            return 1000;
        case 3:
        case 4:
            return 3500;
        case 11:
            return 300;
        case 13:
            return 1000;
        default:
            return 2500;
    }
}

export const removeInlineStyles = (elArr) => {
    if (!elArr.length) return;
    elArr.forEach(el => el && el.hasAttribute('style') && el.removeAttribute('style'));
};

export const stopCustomAnimationSvg = ([svgTextClass, svgTextClass_Path]) => {
    window.animation && window.animation.remove([svgTextClass, svgTextClass_Path]);
    const svgTextEl = document.querySelector(svgTextClass);

    if (!svgTextEl) return;

    const paths = svgTextEl.querySelectorAll('path');

    if (!paths.length) return;

    paths.forEach(path => {
        path.style.strokeDashoffset = '0';
        path.style.strokedasharray = anime.setDashoffset;
    })

    svgTextEl.style.stroke = 'rgb(255, 255, 255)';
    svgTextEl.style.transform = `scaleX(1)`;
    svgTextEl.setAttribute('fill', 'rgba(255,255,255,1)');

    window.animation.completed = true;
    window.animation._name = 'custom_anime';
}

export const stopMainTextAnimation = (classes) => {
    const [majorClass, minorClass] = classes;
    window.animation && window.animation.remove([majorClass, minorClass]);
    const elements = classes.reduce((acc, curr) => {
        const partElements = [...document.querySelectorAll(curr)];
        return [...acc, ...partElements];
    }, []);
    removeInlineStyles(elements);
    elements.forEach(el => el.style.opacity = 1);
    window.animation.completed = true;
    window.animation._name = 'anime';
}

export const stopChooseStoryTitleAnimation = (classes) => {
    const [majorClass, minorClass] = classes;
    window.animation && window.animation.pause();
    const elements = classes.reduce((acc, curr) => {
        const partElements = [...document.querySelectorAll(curr)];
        return [...acc, ...partElements];
    }, []);
    removeInlineStyles(elements);
    elements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = 'translateX(0px) translateZ(0px)';
    });
    window.animation.completed = true;
}

export const stopFormTenAnimation = (classes) => {
    const [majorClass, minorClass] = classes;
    window.chooseStoryAnimation && window.chooseStoryAnimation.remove([majorClass, minorClass]);
    const elements = classes.reduce((acc, curr) => {
        const partElements = [...document.querySelectorAll(curr)];
        return [...acc, ...partElements];
    }, []);
    removeInlineStyles(elements);
    elements.forEach(el => el.style.opacity = 1);
}

export const logoTimeline = (logoColor, introTextFontSize, callback) => {
    window.logoAnimation = anime.timeline()
        .add({
            targets: '.progressBar',
            opacity: [0, 0],
            duration: 1,
        })
        .add({
            targets: '.logo',
            translateX: 0,
            delay: 0,
        })
        .add({
            targets: '.introText',
            // translateX: 0,
            opacity: 1,
            duration: 1,
        })
        .add({
            targets: '.menuLogoSvg',
            translateY: ['46vh', '46vh'],
            translateX: window.innerWidth <= BREAKPOINTS.tablet ? -10 : 0,
            scale: [2.7, 2.7],
            easing: 'linear',
            duration: 1,
            fill: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'],
            stroke: logoColor,
            delay: 0,
        })
        .add({
            targets: '.menuLogoSvg path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInCirc',
            duration: 6000,
            direction: 'alternate',
        })
        .add({
            targets: '.introText',
            opacity: [0, 1],
            // scale: [1.1, 0.92],
            fontSize: [introTextFontSize, introTextFontSize / 100 * 90],
            // translateX: ['-50%', '-50%'],
            duration: 4000,
            easing: 'easeInQuad',
        }, '-=6000')
        .add({
            targets: '.menuLogoSvg',
            scale: [2.7, 2.3],
            easing: 'linear',
            duration: 4000,
        }, '-=6000')
        .add({
            targets: '.menuLogoSvg',
            scale: [2.3, 0],
            opacity: [1, 0],
            translateY: ['46vh', '40vh'],
            easing: 'easeInQuad',
            duration: 1000,
        }, '-=2000')
        .add({
            targets: '.introText',
            opacity: [1, 0],
            // scale: [0.92, 0.2],
            fontSize: [introTextFontSize / 100 * 90, 5],
            duration: 1800,
            easing: 'easeOutQuint',
        }, '-=1900')
        .add({
            targets: '.menuLogoSvg',
            translateY: ['46vh', 0],
            easing: 'linear',
            duration: 1,
        }, '-=200')
        .add({
            targets: '.menuLogoSvg',
            scale: [0.5, 1],
            opacity: [0.5, 1],
            fill: ['none', logoColor],
            easing: 'linear',
            duration: 300,
        }, '-=180')
        .add({
            targets: '.progressBar',

            opacity: [0, 1],
            duration: 300,
            complete: () => callback()
        }, '-=200')
    //
    /* -- Base Logo Animation-- */
    // anime.timeline()
    //   .add({
    //     targets: '.logo',
    //     translateX: 0,
    //     delay: 0,
    //   })
    //   .add({
    //   targets: '.menuLogoSvg',
    //   translateY: ['46vh', '46vh'],
    //   scale: [2.7, 2.7],
    //   easing: 'linear',
    //   duration: 100,
    //   fill: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'],
    //   stroke: logoColor,
    //   delay: 0,
    //   })
    //   .add({
    //     targets: '.menuLogoSvg path',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     easing: 'easeInCirc',
    //     duration: 4000,
    //     direction: 'alternate',
    //   }, '-=100')
    //   .add({
    //   //     targets: '.menuLogoSvg',
    //   //     translateY: ['46vh', 0],
    //   //     scale: [2.7, 1],
    //   //     fill: ['none', logoColor],
    //   //     easing: 'easeInQuart',
    //   //     duration: 1500,
    //   //     complete: () => callback()
    //   //   }, '-=2000')
}

export const getLogoToMobPosition = () => {
    anime({
        targets: '.logo',
        translateX: -window.innerWidth / 2 + 80,
        easing: 'linear',
        duration: 150,
    });
}

export const getFadeInProgressSvg = (svgTargets, callback) => {
    anime({
        targets: svgTargets,
        opacity: [0, 1],
        easing: 'linear',
        duration: 500,
        complete: () => callback()
    })
}

export const getFadeOutProgressSvg = (svgTargets, callback) => {
    anime.timeline()
        .add({
            targets: [svgTargets[0], svgTargets[1]],
            opacity: [1, 0],
            easing: 'linear',
            duration: 500,
        })
        .add({
            targets: svgTargets[2],
            opacity: [1, 0],
            easing: 'linear',
            duration: 500,
            complete: () => callback()
        })
}

export const getFadeInMainText = (callback, mainDelay = 0) => {
    window.animation = anime.timeline()
        .add({
            targets: ['.anime', '.letter'],
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutQuad",
            duration: 500,
            delay: (el, i) => 400 + 30 * i,
        }, `+=${mainDelay}`)
        .add({
            targets: ['.anime2', '.letter2'],
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutQuad",
            duration: 500,
            delay: (el, i) => 400 + 30 * i,
            complete: () => callback()
        }, `-=${mainDelay ? mainDelay : 2300}`)
}

export const getFadeOutMainText = (callback) => {
    window.animation = anime.timeline()
        .add({
            targets: '.anime .letter',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInQuad",
            duration: 500,
            delay: (el, i) => 50 + 10 * i,
        }).add({
            targets: '.anime',
            opacity: [1, 0],
            duration: 100,
        })
        .add({
            targets: '.anime2 .letter2',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInQuad",
            duration: 500,
            delay: (el, i) => 50 + 10 * i,
        }, '-=1500')
        .add({
            targets: '.anime2',
            opacity: [1, 0],
            duration: 100,
            complete: () => callback()
        })
}

export const getFadeInChooseStoryText = (callback) => {
    window.chooseStoryAnimation = anime.timeline()
        .add({
            targets: ['.chooseStoryText', '.storyLetter'],
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutQuad",
            duration: 200,
            delay: (el, i) => 400 + 15 * i,
            complete: () => callback()
        })
}

export const getFadeOutChooseStoryText = () => {
    window.chooseStoryAnimation = anime.timeline()
        .add({
            targets: ['.chooseStoryText', '.storyLetter'],
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInQuad",
            duration: 500,
            delay: (el, i) => 50 + 10 * i,
        })
}

export const getFadeInCustomText = (callback) => {
    window.animation = anime.timeline()
        .add({
            targets: ['.svgText', '.svgText2'],
            stroke: '#ffffff',
            scaleX: [1.3, 1],
            duration: 1100,
            easing: 'easeOutQuad',
        })
        .add({
            targets: ['.svgText path', '.svgText2 path'],
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 500,
            easing: 'linear',
            delay: function(el, i) {
                return i * 100
            },
        }, '-=1100')
        .add({
            targets: '.svgText',
            fill: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
            duration: 650,
            easing: 'linear',
        }, '-=350')
        .add({
            targets: '.svgText2',
            fill: ["rgba(255,255,255,0)", "rgba(255,255,255,1)"],
            duration: 650,
            easing: 'linear',
        }, '-=650')
        .add({
            targets: '.custom_anime, .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 400,
            delay: (el, i) => 7 * (i + 1),
            complete: () => callback()
        }, '-=1700')
}

export const getFadeOutCustomText = (callback) => {
    window.animation = anime.timeline()
        .add({
            targets: ['.svgText', '.svgText2'],
            fill: ["rgba(255,255,255,1)", "rgba(255,255,255,0)"],
            duration: 400,
            easing: 'linear',
        })
        .add({
            targets: ['.svgText', '.svgText2'],
            stroke: '#ffffff',
            scaleX: {
                value: [1, 1.1],
                delay: 150,
            },
            duration: 700,
            easing: 'easeInQuad',
        }, '-=100')
        .add({
            targets: ['.svgText path', '.svgText2 path'],
            strokeDashoffset: [0, anime.setDashoffset],
            duration: 300,
            easing: 'linear',
            delay: function(el, i) {
                return i * 30
            },
        }, '-=900')
        .add({
            targets: '.custom_anime, .letter',
            opacity: [1, 0],
            easing: "easeInOutQuad",
            duration: 250,
            delay: (el, i) => 5 * (i + 1),
            complete: () => callback()
        }, '-=550')
}

export const getFadeOutFormTen = (targets, delay = 0, callback) => {
    window.formTenAnimation = anime.timeline()
        .add({
            targets,
            opacity: [1, 0],
            easing: "easeOutQuad",
            delay: delay,
            complete: () => callback()
        })
}

export const getFadeInFormTen = (targets, delay = 0, callback) => {
    window.formTenAnimation = anime.timeline()
        .add({
            targets,
            opacity: [0, 1],
            easing: "linear",
            delay: delay,
            complete: () => callback()
        })
}

export const desktopMenuLabelAnimation = (letters, textWrapper) => {
    anime({
        targets: letters,
        opacity: 1,
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 500,
        delay: (el, i) => 30 * i
    });
    anime({
        targets: textWrapper,
        duration: 500,
        easing: "easeOutExpo",
        delay: 500
    })
}

export const mobBurgerCloseAnimation = (burgerChildren) => {
    anime.timeline()
        .add({
            targets: burgerChildren[0],
            translateX: 0,
            rotate: '0deg',
            translateY: 0,
            easing: 'linear',
            duration: 300
        })
        .add({
            targets: burgerChildren[1],
            opacity: [0, 1],
            translateX: 0,
            easing: 'linear',
            duration: 300
        }, '-=300')
        .add({
            targets: burgerChildren[2],
            translateX: 0,
            rotate: '0deg',
            translateY: 0,
            easing: 'linear',
            duration: 300
        }, '-=600');
}

export const mobBurgerOpenAnimation = (burgerChildren) => {
    anime.timeline()
        .add({
            targets: burgerChildren[0],
            translateX: '14px',
            rotate: '45deg',
            translateY: '14px',
            easing: 'linear',
            duration: 300
        })
        .add({
            targets: burgerChildren[1],
            opacity: [1, 0],
            translateX: '-30px',
            easing: 'linear',
            duration: 300
        }, '-=300')
        .add({
            targets: burgerChildren[2],
            translateX: '14px',
            rotate: '-45deg',
            translateY: '-14px',
            easing: 'linear',
            duration: 300
        }, '-=600');
}

export const mobMenuCloseAnimation = (btn) => {
    anime.timeline().add({
        targets: btn,
        translateY: '-700px',
        opacity: [1, 0],
        easing: 'linear',
        duration: 300,
    })
    // .add({
    //   targets: '.menu',
    //   // gridTemplateRows: window.innerWidth < 901 ? `73px 0px 0px 0px 0px` : `initial`,
    //   easing: 'linear',
    //   duration: 300,
    // }, '-=250');
}

export const mobMenuOpenAnimation = (btn) => {
    anime.timeline()
        .add({
            targets: btn,
            translateY: 0,
            opacity: [0, 1],
            duration: 300,
            easing: 'linear',
        })
    //   .add({
    //   targets: '.menu',
    //   // gridTemplateRows: window.innerWidth < 901 ? `93px 64px 64px 64px 94px` : `auto`,
    //   easing: 'linear',
    //   duration: 300
    // });
}

export const mobLogoCloseAnimation = (logo) => {
    anime({
        targets: logo,
        translateX: -window.innerWidth / 2 + 80,
        easing: 'linear',
        duration: 150,
    });
}

export const mobLogoOpenAnimation = (logo) => {
    anime({
        targets: logo,
        translateX: 0,
        easing: 'linear',
        duration: 150,
    });
}

export const rightMenuBtnHoverInAnimation = (menuRightBtn, rightBorderBtn, startBg) => {
    window.animation_t1 = anime.timeline()
        .add({
            targets: menuRightBtn,
            backgroundColor: [startBg, `rgba(255,255,255,0)`],
            duration: 250,
            easing: 'linear'
        }).add({
            targets: rightBorderBtn,
            strokeDashoffset: [520, 0],
            delay: 80,
            duration: 300,
            easing: 'linear'
        })
}

export const rightMenuBtnHoverOutAnimation = (rightBorderBtn, menuRightBtn, bg, callback) => {
    window.animation_t1 = anime.timeline()
        .add({
            targets: rightBorderBtn,
            strokeDashoffset: [0, 520],
            duration: 300,
            easing: 'linear'
        })
        .add({
            targets: menuRightBtn,
            backgroundColor: [`rgba(255,255,255,0)`, bg],
            duration: 100,
            easing: 'linear',
            complete: () => callback()
        })
}

export const rightMenuBtnMouseDownAnimation = (targetEl, bg) => {
    anime({
        targets: targetEl,
        backgroundColor: [`rgba(255,255,255,0)`, bg],
        duration: 1,
        easing: 'linear',
    })
}

export const rightMenuBtnMouseUpAnimation = (targetEl, bg, callback) => {
    anime({
        targets: targetEl,
        backgroundColor: [bg, `rgba(255,255,255,0)`],
        duration: 1,
        easing: 'linear',
        complete: () => callback()
    })
}