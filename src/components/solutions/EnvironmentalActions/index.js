import React from 'react';
import Button from 'src/components/common/Button';
import Img from 'src/components/common/Img';
import styles from './EnvironmentalActions.module.scss';
import ArrowRight from '@ui-icons/ArrowRight.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Link from 'next/link';

export default function EnvironmentalActions({ content }) {

  const data = [
    {
      "id": 7,
      "attributes": {
        "title": "Limpeza da Praia de Tramandaí",
        "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Diam in arcu cursus euismod. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa tincidunt dui ut ornare lectus sit amet est. At erat pellentesque adipiscing commodo elit at imperdiet. Diam vel quam elementum pulvinar etiam non. Et netus et malesuada fames ac turpis egestas sed tempus. Sed vulputate mi sit amet. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla.</p><p>Volutpat blandit aliquam etiam erat. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Tellus molestie nunc non blandit massa enim nec. Turpis in eu mi bibendum neque egestas congue quisque egestas. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Aliquet lectus proin nibh nisl condimentum. Sit amet volutpat consequat mauris nunc congue. Amet est placerat in egestas. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Faucibus nisl tincidunt eget nullam non. Sagittis orci a scelerisque purus semper eget duis. Massa ultricies mi quis hendrerit. Amet nulla facilisi morbi tempus iaculis. Ultrices dui sapien eget mi proin sed libero enim.</p><p>Sem viverra aliquet eget sit amet tellus cras. Nunc pulvinar sapien et ligula ullamcorper. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Turpis massa sed elementum tempus egestas sed sed risus pretium. Tincidunt nunc pulvinar sapien et ligula. In fermentum posuere urna nec. Leo vel fringilla est ullamcorper eget nulla. Et netus et malesuada fames ac turpis egestas. Consectetur purus ut faucibus pulvinar elementum. Scelerisque fermentum dui faucibus in ornare quam. Enim ut sem viverra aliquet eget sit amet tellus cras. Arcu risus quis varius quam quisque id diam. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Mattis vulputate enim nulla aliquet. In fermentum posuere urna nec. Est placerat in egestas erat. Consequat interdum varius sit amet.</p><p>Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Non curabitur gravida arcu ac tortor dignissim. Pharetra pharetra massa massa ultricies mi quis hendrerit. Sed ullamcorper morbi tincidunt ornare. Risus sed vulputate odio ut enim blandit volutpat maecenas. Mattis molestie a iaculis at erat pellentesque. Cursus in hac habitasse platea dictumst. Ultrices sagittis orci a scelerisque purus semper eget duis. Diam maecenas sed enim ut. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.</p><p>Amet porttitor eget dolor morbi non arcu risus. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Egestas pretium aenean pharetra magna ac. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Praesent elementum facilisis leo vel fringilla est. Diam maecenas ultricies mi eget mauris pharetra. Justo eget magna fermentum iaculis eu. Fermentum dui faucibus in ornare quam viverra orci. Facilisi etiam dignissim diam quis enim lobortis. Tellus elementum sagittis vitae et. Fusce id velit ut tortor pretium viverra. At varius vel pharetra vel turpis nunc eget lorem. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Pharetra pharetra massa massa ultricies mi quis hendrerit. Augue neque gravida in fermentum et. Molestie ac feugiat sed lectus. Ac orci phasellus egestas tellus rutrum tellus pellentesque.</p>",
        "slug": "limpeza-da-praia-de-tramandai",
        "createdAt": "2023-01-19T17:52:45.943Z",
        "updatedAt": "2023-02-08T13:48:54.030Z",
        "publishedAt": "2023-01-19T17:53:01.964Z",
        "cover": {
          "data": {
            "id": 26,
            "attributes": {
              "name": "AdobeStock_507497673.jpeg",
              "alternativeText": null,
              "caption": null,
              "width": 5596,
              "height": 3573,
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_AdobeStock_507497673.jpeg",
                  "hash": "thumbnail_Adobe_Stock_507497673_7937a394ec",
                  "ext": ".jpeg",
                  "mime": "image/jpeg",
                  "path": null,
                  "width": 244,
                  "height": 156,
                  "size": 9.12,
                  "url": "/uploads/thumbnail_Adobe_Stock_507497673_7937a394ec.jpeg"
                }
              },
              "hash": "Adobe_Stock_507497673_7937a394ec",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "size": 1826.42,
              "url": "/uploads/Adobe_Stock_507497673_7937a394ec.jpeg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2023-01-19T17:49:37.848Z",
              "updatedAt": "2023-01-19T17:49:37.848Z"
            }
          }
        },
        "categorias": {
          "data": [
            {
              "id": 4,
              "attributes": {
                "name": "Ações Socioambientais",
                "slug": "acoes-socioambientais",
                "createdAt": "2023-01-19T17:51:16.334Z",
                "updatedAt": "2023-01-19T17:51:16.334Z"
              }
            }
          ]
        }
      }
    },
    {
      "id": 8,
      "attributes": {
        "title": "Ação Socio 2",
        "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros in. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Diam sollicitudin tempor id eu nisl. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Quam viverra orci sagittis eu. Urna nec tincidunt praesent semper feugiat. Tellus cras adipiscing enim eu turpis egestas. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Auctor augue mauris augue neque gravida. Non blandit massa enim nec dui nunc mattis enim ut. Tristique et egestas quis ipsum suspendisse. Imperdiet massa tincidunt nunc pulvinar. Purus ut faucibus pulvinar elementum integer enim neque. Bibendum ut tristique et egestas quis ipsum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida.</p><p>Congue quisque egestas diam in arcu cursus euismod quis viverra. Leo duis ut diam quam nulla porttitor massa id. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Sit amet mauris commodo quis imperdiet. Egestas pretium aenean pharetra magna ac. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. In hac habitasse platea dictumst quisque sagittis purus sit. In massa tempor nec feugiat nisl pretium fusce. Dictumst quisque sagittis purus sit amet. Donec et odio pellentesque diam volutpat commodo. Lorem ipsum dolor sit amet. Varius sit amet mattis vulputate enim nulla. Quisque non tellus orci ac. Ut pharetra sit amet aliquam id diam maecenas ultricies. Pulvinar mattis nunc sed blandit. Et magnis dis parturient montes nascetur ridiculus mus. Elementum nibh tellus molestie nunc non blandit massa. At volutpat diam ut venenatis.</p><p>Egestas tellus rutrum tellus pellentesque eu. Fermentum leo vel orci porta. Integer feugiat scelerisque varius morbi enim nunc. Malesuada fames ac turpis egestas sed. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Risus viverra adipiscing at in. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Etiam non quam lacus suspendisse faucibus. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Erat nam at lectus urna duis convallis.</p><p>Mattis nunc sed blandit libero volutpat sed cras ornare. Parturient montes nascetur ridiculus mus. Ullamcorper velit sed ullamcorper morbi tincidunt. Nisl pretium fusce id velit ut tortor pretium viverra. Lectus urna duis convallis convallis tellus id interdum velit. Amet nulla facilisi morbi tempus iaculis. Pharetra massa massa ultricies mi quis hendrerit. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Aenean pharetra magna ac placerat vestibulum lectus. Faucibus interdum posuere lorem ipsum dolor. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Nunc vel risus commodo viverra maecenas accumsan lacus.</p><p>Lectus arcu bibendum at varius vel pharetra vel. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Et ultrices neque ornare aenean euismod elementum nisi. Varius quam quisque id diam vel quam elementum pulvinar etiam. Amet venenatis urna cursus eget. At urna condimentum mattis pellentesque id nibh tortor. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Id semper risus in hendrerit gravida rutrum quisque non. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Posuere morbi leo urna molestie at. Quis blandit turpis cursus in hac habitasse platea. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Pellentesque nec nam aliquam sem et. Vel risus commodo viverra maecenas accumsan lacus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl.</p>",
        "slug": "acao-socio-2",
        "createdAt": "2023-02-08T13:49:58.588Z",
        "updatedAt": "2023-02-08T13:50:00.891Z",
        "publishedAt": "2023-02-08T13:50:00.883Z",
        "cover": {
          "data": {
            "id": 4,
            "attributes": {
              "name": "post-1.png",
              "alternativeText": null,
              "caption": null,
              "width": 2514,
              "height": 2250,
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_post-1.png",
                  "hash": "thumbnail_post_1_b16e5e6540",
                  "ext": ".png",
                  "mime": "image/png",
                  "path": null,
                  "width": 174,
                  "height": 156,
                  "size": 44.93,
                  "url": "/uploads/thumbnail_post_1_b16e5e6540.png"
                }
              },
              "hash": "post_1_b16e5e6540",
              "ext": ".png",
              "mime": "image/png",
              "size": 6432.44,
              "url": "/uploads/post_1_b16e5e6540.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2023-01-10T11:20:19.021Z",
              "updatedAt": "2023-01-10T11:20:19.021Z"
            }
          }
        },
        "categorias": {
          "data": [
            {
              "id": 4,
              "attributes": {
                "name": "Ações Socioambientais",
                "slug": "acoes-socioambientais",
                "createdAt": "2023-01-19T17:51:16.334Z",
                "updatedAt": "2023-01-19T17:51:16.334Z"
              }
            }
          ]
        }
      }
    },
    {
      "id": 9,
      "attributes": {
        "title": "Ação Socio 3",
        "body": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat vestibulum lectus mauris ultrices eros in. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Diam sollicitudin tempor id eu nisl. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Quam viverra orci sagittis eu. Urna nec tincidunt praesent semper feugiat. Tellus cras adipiscing enim eu turpis egestas. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Auctor augue mauris augue neque gravida. Non blandit massa enim nec dui nunc mattis enim ut. Tristique et egestas quis ipsum suspendisse. Imperdiet massa tincidunt nunc pulvinar. Purus ut faucibus pulvinar elementum integer enim neque. Bibendum ut tristique et egestas quis ipsum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida.</p><p>Congue quisque egestas diam in arcu cursus euismod quis viverra. Leo duis ut diam quam nulla porttitor massa id. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Sit amet mauris commodo quis imperdiet. Egestas pretium aenean pharetra magna ac. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. In hac habitasse platea dictumst quisque sagittis purus sit. In massa tempor nec feugiat nisl pretium fusce. Dictumst quisque sagittis purus sit amet. Donec et odio pellentesque diam volutpat commodo. Lorem ipsum dolor sit amet. Varius sit amet mattis vulputate enim nulla. Quisque non tellus orci ac. Ut pharetra sit amet aliquam id diam maecenas ultricies. Pulvinar mattis nunc sed blandit. Et magnis dis parturient montes nascetur ridiculus mus. Elementum nibh tellus molestie nunc non blandit massa. At volutpat diam ut venenatis.</p><p>Egestas tellus rutrum tellus pellentesque eu. Fermentum leo vel orci porta. Integer feugiat scelerisque varius morbi enim nunc. Malesuada fames ac turpis egestas sed. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Risus viverra adipiscing at in. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Etiam non quam lacus suspendisse faucibus. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Erat nam at lectus urna duis convallis.</p><p>Mattis nunc sed blandit libero volutpat sed cras ornare. Parturient montes nascetur ridiculus mus. Ullamcorper velit sed ullamcorper morbi tincidunt. Nisl pretium fusce id velit ut tortor pretium viverra. Lectus urna duis convallis convallis tellus id interdum velit. Amet nulla facilisi morbi tempus iaculis. Pharetra massa massa ultricies mi quis hendrerit. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Aenean pharetra magna ac placerat vestibulum lectus. Faucibus interdum posuere lorem ipsum dolor. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Nunc vel risus commodo viverra maecenas accumsan lacus.</p><p>Lectus arcu bibendum at varius vel pharetra vel. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Et ultrices neque ornare aenean euismod elementum nisi. Varius quam quisque id diam vel quam elementum pulvinar etiam. Amet venenatis urna cursus eget. At urna condimentum mattis pellentesque id nibh tortor. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Id semper risus in hendrerit gravida rutrum quisque non. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Posuere morbi leo urna molestie at. Quis blandit turpis cursus in hac habitasse platea. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Pellentesque nec nam aliquam sem et. Vel risus commodo viverra maecenas accumsan lacus. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl.</p>",
        "slug": "acao-socio-3",
        "createdAt": "2023-02-08T13:50:31.107Z",
        "updatedAt": "2023-02-08T13:50:33.773Z",
        "publishedAt": "2023-02-08T13:50:33.765Z",
        "cover": {
          "data": {
            "id": 3,
            "attributes": {
              "name": "post-2.jpg",
              "alternativeText": null,
              "caption": null,
              "width": 5571,
              "height": 3765,
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_post-2.jpg",
                  "hash": "thumbnail_post_2_9f8b890629",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "path": null,
                  "width": 231,
                  "height": 156,
                  "size": 9.01,
                  "url": "/uploads/thumbnail_post_2_9f8b890629.jpg"
                }
              },
              "hash": "post_2_9f8b890629",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "size": 9109.24,
              "url": "/uploads/post_2_9f8b890629.jpg",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2023-01-10T11:20:18.793Z",
              "updatedAt": "2023-01-10T11:20:18.793Z"
            }
          }
        },
        "categorias": {
          "data": [
            {
              "id": 4,
              "attributes": {
                "name": "Ações Socioambientais",
                "slug": "acoes-socioambientais",
                "createdAt": "2023-01-19T17:51:16.334Z",
                "updatedAt": "2023-01-19T17:51:16.334Z"
              }
            }
          ]
        }
      }
    }
  ]

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className={styles.textContent}>
              <header>
                <Img {...content.about.icon} />
                <h2>{content.about.title}</h2>
              </header>
              <p>{content.about.text}</p>
              <Button href="#" RightIcon={ArrowRight}>Participar das Ações</Button>
            </div>
          </div>
        </div>
      </div>

      <div className={`row justify-content-end ${styles.sliderRow}`}>
        <div className="col-12 col-lg-5">
          <div className={styles.sliderSection}>
            <Swiper
              spaceBetween={24}
              grabCursor
              centeredSlides
              loop
              speed={1200}
              onTransitionEnd={self => self.params.speed = 1200}
              onTouchStart={self => self.params.speed = 300}
              modules={[Autoplay, Pagination]}
              pagination={{
                enabled: true,
                type: 'fraction',
              }}
              autoplay={{
                delay: 300,
                pauseOnMouseEnter: true,
              }}
            >
              {
                data.map((card, index) => (
                  <SwiperSlide key={index} className="col-12 col-lg-5">
                    <div className={styles.coverWrapper}>
                      <Link href="#" className="link-image">
                        <Img {...card.attributes.cover} fill />
                      </Link>
                      <Button className="tag light">Ações Socioambientais</Button>
                      <div className={styles.footer}>
                        <h3>{card.attributes.title}</h3>
                        <Button link RightIcon={ArrowRight}>Ver Publicação Completa</Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
