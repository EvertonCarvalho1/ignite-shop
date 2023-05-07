import Head from 'next/head';
import { useRouter } from 'next/router';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';
import Image from "next/image";

export default function Home() {
    const { query } = useRouter();

    return (
        <>
            <Head>
                <title> | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    {/* <Image src='https://avatars.githubusercontent.com/u/82480230?v=4' width={520} height={480} alt="" /> */}
                </ImageContainer>

                <ProductDetails>
                    <h1>Camiseta</h1>
                    <span>79</span>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem, porro natus officiis omnis doloribus commodi. Voluptatibus tempore dignissimos officiis? Corporis, culpa et. Ex adipisci corrupti animi! Quia, libero accusamus!</p>

                    <button>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

