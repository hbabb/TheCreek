import Image from "next/image";
import McbcLogo from "../../public/McbcTransparentLogoOnly.svg"
import McbcLogoWhite from "../../public/McbcTransparentLogoOnly-white.svg"
import { Header } from "@/components/layout/Header"

export default function Home() {
  return (
    
    <div className="animate-appear flex min-h-screen flex-col items-center justify-between dark:bg-slate-800 mx-auto w-full">
      <Header />

      <main className="flex flex-col  w-full flex-1 items-center justify-center lg:flex-row lg:justify-around">

        {/* Logo Section */}
        <div className="flex flex-col items-center w-full lg:w-1/3 mx-6 px-6 ">
          <div className="relative w-11/12 -mb-12 text-creek-blue dark:text-creek-white">
            <Image
              src={McbcLogo}
              alt="Motlow Creek Baptist Church Logo"
              width={800}
              height={800}
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src={McbcLogoWhite}
              alt="Motlow Creek Baptist Church Logo"
              width={800}
              height={800}
              className="hidden dark:block object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-center text-creek-gray dark:text-creek-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-allura">
              Motlow Creek Baptist Church
            </h1>
            <h3 className="text-base md:text-lg lg:text-xl font-roboto-400 uppercase tracking-[0.2em] [word-spacing:0.3em]">
              Where Faith Grows and Hearts Connect
            </h3>
          </div>
        </div>

        {/* Message from the Pastor */}
        <div className="flex flex-col items-center w-full h-full lg:w-2/3 p-6 mr-8 dark:text-creek-white border-4 rounded-2xl border-creek-blue dark:border-creek-white">
          <h1 className="h-full text-3xl md:text-4xl lg:text-5xl font-allura">
            Message from the Pastor&apos;s Heart
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-roboto-400 pt-4">
          To you, Yahweh, I call. My rock, don't be deaf to me; lest, if you are silent to me, I would become like those who go down into the pit. Hear the voice of my petitions, when I cry to you, when I lift up my hands toward your Most Holy Place. Don't draw me away with the wicked, with the workers of iniquity who speak peace with their neighbors, but mischief is in their hearts. Give them according to their work, and according to the wickedness of their doings. Give them according to the operation of their hands. Bring back on them what they deserve. Because they don't respect the works of Yahweh, nor the operation of his hands, he will break them down and not build them up. Blessed be Yahweh, because he has heard the voice of my petitions. Yahweh is my strength and my shield. My heart has trusted in him, and I am helped. Therefore my heart greatly rejoices. With my song I will thank him. Yahweh is their strength. He is a stronghold of salvation to his anointed. Save your people, and bless your inheritance. Be their shepherd also, and bear them up forever.
          <br/>
          <br/>
          God presides in the great assembly. He judges among the gods. «How long will you judge unjustly, and show partiality to the wicked?» «Defend the weak, the poor, and the fatherless. Maintain the rights of the poor and oppressed. Rescue the weak and needy. Deliver them out of the hand of the wicked.» They don't know, neither do they understand. They walk back and forth in darkness. All the foundations of the earth are shaken. I said, «You are gods, all of you are sons of the Most High. Nevertheless you shall die like men, and fall like one of the rulers.» Arise, God, judge the earth, for you inherit all of the nations.
          <br/>
          <br/>
          Yahweh, remember David and all his affliction, how he swore to Yahweh, and vowed to the Mighty One of Jacob: «Surely I will not come into the structure of my house, nor go up into my bed; I will not give sleep to my eyes, or slumber to my eyelids; until I find out a place for Yahweh, a dwelling for the Mighty One of Jacob.» Behold, we heard of it in Ephrathah. We found it in the field of Jaar: «We will go into his dwelling place. We will worship at his footstool. Arise, Yahweh, into your resting place; you, and the ark of your strength. Let your priest be clothed with righteousness. Let your saints shout for joy!» For your servant David's sake, don't turn away the face of your anointed one. Yahweh has sworn to David in truth. He will not turn from it: «I will set the fruit of your body on your throne. If your children will keep my covenant, my testimony that I will teach them, their children also will sit on your throne forevermore.» For Yahweh has chosen Zion. He has desired it for his habitation. «This is my resting place forever. Here I will live, for I have desired it. I will abundantly bless her provision. I will satisfy her poor with bread. Her priests I will also clothe with salvation. Her saints will shout aloud for joy. There I will make the horn of David to bud. I have ordained a lamp for my anointed. I will clothe his enemies with shame, but on himself, his crown will be resplendent. 
          </p>
        </div>


      </main>

      {/* <Footer /> */}
    </div>
  );
}
