import Image from 'next/image'
import sword from '../../../public/sword.jpg'

export default function Page() {
    return (
        <>
            <Image
                src={sword}
                alt="Picture of the author"
            // width = automatically provided
            // height = automatically provided
            />
            <Image
                src="/sword.jpg"
                alt='sword'
                //especificar o tamanho da imagem real
                width={700}
                height={500}
            //fill - parent -position relative and display block / quandoo width e height da imagem são desconhecidos
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // priority 
            //placeholder = 'empty' // "empty" | "blur" | "data:image/..."

            />
        </>
    )
}