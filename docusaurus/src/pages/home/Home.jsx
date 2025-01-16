import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './home.module.scss';
import {
  Button,
  Card,
  CardDescription,
  CardImg,
  CardImgBg,
  CardTitle,
  Carousel,
  CarouselSlide,
  Container,
  FeaturesList,
  Hero,
  HeroDescription,
  HeroTitle,
  LinkWithArrow,
} from '../../components';
import content from './_home.content';

const NAVBAR_TRANSLUCENT_UNTIL_SCROLL_Y = 36;

const Icon = ({
  name,
  classes = 'ph-fill',
  color = 'inherit'
}) => {

  return (
    <i className={`strapi-icons ${classes} ph-${name}`} style={{color}}></i>
  );
}

export default function PageHome() {
  const [isNavbarTranslucent, setIsNavbarTranslucent] = useState(true);

  /**
   * Scroll Listener to apply the "translucent" visual effect to navbar,
   * behavior which happens only at Home Page.
   */
  useEffect(() => {
    function scrollListener() {
      setIsNavbarTranslucent(window.scrollY <= NAVBAR_TRANSLUCENT_UNTIL_SCROLL_Y);
    }

    scrollListener();
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Layout
      title={content.page.title}
      description={content.page.description}
    >
      {/* {isNavbarTranslucent && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .navbar {
                --ifm-navbar-background-color: transparent;
                --ifm-navbar-shadow: none;
              }
            `
          }}
        />
      )}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html[data-theme='dark'] {
              --ifm-background-color: #181826;
              --ifm-navbar-background-color: #181826;

              --strapi-primary-600: #4945FF;
            }

            html[data-theme='dark'] .navbar .DocSearch-Button {
              background: var(--strapi-neutral-0);
            }
          `,
        }}
      /> */}
      <main className={clsx('font-poppins', styles.home)}>
        <Hero id="homeHero" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
          }}>
          <Container>
            <Icon name="chef-hat" /><span>We're cooking something totally new on docs-next.</span>
            <div>Please come back in a few weeks and visit the stable docs at <a href="docs.strapi.io">docs.strapi.io</a> in the meantime.</div>
            <img style={{ 
              display: "block",
              margin: "24px auto" 
              }} width="400px" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmtsdzR6dGVsaHczaTh2ZnlnNTJhamY4b20yamxpa3ZkbWFqbDY4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/demgpwJ6rs2DS/giphy.gif" />
          </Container>
        </Hero>
        {/* <section
          id="homeCarousel"
          className={styles.home__carousel}
        >
          <Container>
            <Carousel>
              {content.carousel.map(({
                backgroundImgSrc: carouselCardBackgroundImgSrc,
                title: carouselCardTitle,
                description: carouselCardDescription,
                button: carouselCardButtonProps,
                ...carouselCardRest
              }, carouselItemIndex) => (
                <CarouselSlide key={`pageHomeCarouselItem${carouselItemIndex}`}>
                  <Card isContentDelimited {...carouselCardRest}>
                    {carouselCardBackgroundImgSrc && (
                      <CardImgBg src={carouselCardBackgroundImgSrc} />
                    )}
                    {carouselCardTitle && (
                      <CardTitle as="h2">{carouselCardTitle}</CardTitle>
                    )}
                    {carouselCardDescription && (
                      <CardDescription>{carouselCardDescription}</CardDescription>
                    )}
                    {carouselCardButtonProps && (
                      <div className={styles.home__carousel__cta}>
                        <Button size="huge" {...carouselCardButtonProps}>
                          {carouselCardButtonProps.children || carouselCardButtonProps.label}
                        </Button>
                      </div>
                    )}
                  </Card>
                </CarouselSlide>
              ))}
            </Carousel>
          </Container>
        </section> */}
        {/* <section
          id="homeCategories"
          className={styles.home__categories}
        >
          <Container>
            <div className="row row--huge">
              {content.categories.map(({
                cardTitle: categoryItemCardTitle,
                cardDescription: categoryItemCardDescription,
                cardImgSrc: categoryItemCardImgSrc,
                cardLink: categoryItemCardLink,
                ...categoryItem
              }, categoryItemIndex) => {
                return (
                  <div
                    key={`pageHomeCategoryItem${categoryItemIndex}`}
                    className={clsx(
                      'col',
                      'col--4',
                      styles.home__categories__item,
                    )}
                  >
                    <Card to={categoryItemCardLink}>
                      {categoryItemCardTitle && <CardTitle withArrow>{categoryItemCardTitle}</CardTitle>}
                      {categoryItemCardDescription && <CardDescription>{categoryItemCardDescription}</CardDescription>}
                      {categoryItemCardImgSrc && <CardImg src={categoryItemCardImgSrc} />}
                    </Card>
                    {categoryItem.links && (
                      <FeaturesList
                        icon={categoryItem.linksIconSrc}
                        iconColor={categoryItem.linksIconColor}
                        items={categoryItem.links}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section> */}
        {/* <section
          id="homeHelpUsImproveTheDocumentation"
          className={styles.home__huitd}
        >
          <Container>
            <LinkWithArrow
              apart
              className={styles.home__huitd__link}
              {...content.huitd}
            >
              {content.huitd.label}
            </LinkWithArrow>
          </Container>
        </section> */}
      </main>
    </Layout>
  );
}
