"use client";
import { Box } from "@mui/material";
import { TypeWritter } from "@/app/js/typewriter";
import { useEffect } from "react";
import Footer from "../navigation/footer";
import Link from "next/link";
export default function Home() {
    useEffect(() => {
        const txtElement = document.querySelector(".txt-type");
        if (txtElement) {
            const words = JSON.parse(txtElement.getAttribute("data-words")!);
            const wait = txtElement.getAttribute("data-wait");
            new TypeWritter(
                txtElement as HTMLElement,
                words,
                wait ? parseInt(wait, 10) : undefined
            );
        }
    }, []);

    return (
        <Box gap={4}>
            <div className="flex justify-center items-center gap-1  pt-12 mt-32 sm:mt-40 md:mt-56 ">
                <div className="grid w-1/2 justify-center items-center">
                    <p className="font-bold text-xs text-gray-500 sm:text-xl md:text-3xl lg:text-3xl ">
                        Бидний{" "}
                        <span
                            className="txt-type text-blue-300"
                            data-wait="4000"
                            data-words='["эхлэл", "төгсгөл",  "үргэлжлэл"]'
                        ></span>

                    </p>
                    <Box className="flex w-full  justify-center items-center bg-white rounded-full m-1 px-12 mr-4 hover:bg-gray-500 ">
                        <Link href="../login" >Sign in</Link>
                    </Box>
                </div>
                <div className="justify-center w-1/2 items-center mr-10">
                    <Box
                        position='relative'
                        component="img"
                        src="/assets/image/family-Divorce.jpg"
                        width="800px"
                        height="600px"
                        alt="family tree"
                        className=" rounded-3xl z-20 w-60 h-40 sm:w-80 sm:h-60  md:w-96 md:h-76 shadow-2xl lg:w-2/3 lg:h-1/3 shadow-gray-700"

                    />
                    {/* <Box

                        sx={{
                            position: 'absolute',
                            zIndex: '-10',
                            borderRadius: 5,
                            width: 220,
                            height: 160,
                            right: 14,
                            top: 160,
                            backgroundColor: '#2e2e2e',
                        }}
                        className="absolute -z-10 rounded-3xl  w-56 h-40 sm:w-80 sm:h-60  md:w-96 md:h-76 top-40 right-12 sm:right-4 sm:top-48 md:top-64 md:right-12  lg:right-96"
                    // style={{ backgroundColor: '#2e2e2e' }}
                    >
                        <div></div>
                    </Box> */}
                </div>
            </div>
            <div className="flex items-center justify-center p-20 ">
                <p className=" text-slate-400">
                    Гэрийн үеийн бичмэл буюу гэрийн түүх, угийн бичиг хоёрын үүссэн цаг
                    хугацаа нь монголчуудын түүхийн тодорхой хоёр үед хамаарна. Угийн
                    бичиг нь овог нийтийн түүхийн тэмдэглэл байсан бол, гэрийн түүх нь
                    нэгэн өрхөөс гаралтай хэсэг хүмүүсийн тэмдэглэл байжээ. Овгийн түүхийн
                    тухай аман домгоос угийн бичиг үүсэж, овог задарч айл гарч ирсэнтэй
                    холбогдон аман уламжлалын үндсэн дээр гэрийн түүх үүсчээ. Овгийн
                    байгуулал задарснаас хойш угийн бичиг, гэрийн үеийн бичмэлийн ялгаа
                    аажмаар үгүй болж уг удмаа дурдаад гэрийн түүхээ үргэлжлүүлэн бичдэг
                    болжээ. Бичиг үсэг үүсээгүй байх тэр цагт удам угсаагаа цээжлүүлэн
                    амаар уламжилдаг байж. Бичиг үсэг үүссэн үеэс ясан төрөл буюу эцгийн
                    талын шугамыг баримтлан, үеэс үе дамжуулан тасралтгүй залгаж
                    хөтөлснийг угийн бичиг буюу гэрийн үеийн бичмэл гэх болжээ.
                </p>
            </div>
            <div className="w-full relative bottom-0 mt-2">
                <Footer />
            </div>
        </Box>
    );
}
