import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-24 text-center">
        <h2 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl dark:text-gray-200">
          A Vision for Tomorrow
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-500">
          Imagine a world where resources are shared equitably, where every child has access to education, and where differences are celebrated rather than condemned. This vision is achievable, but it requires commitment from each of us. Let us join hands across borders, transcending language, culture, and background, to advocate for a peaceful coexistence.
        </p>
        <Card className="m-auto w-[500px] mt-10">
          <CardHeader>
            <CardTitle>Imagine</CardTitle>
            <CardDescription>John Lennon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-gray-700">
              <p className="mb-4">Imagine there's no heaven
                It's easy if you try
                No hell below us
                Above us, only sky
              </p>
              <p className="mb-4">
                Imagine all the people
                Livin' for today Ah
              </p>
              <p className="mb-4">
                Imagine there's no countries
                It isn't hard to do
                Nothing to kill or die for
                And no religion, too
              </p>
              <p className="mb-4">
                Imagine all the people
                Livin' life in peace
                You
              </p>
              <p className="mb-4">
                You may say I'm a dreamer
                But I'm not the only one
                I hope someday you'll join us
                And the world will be as one
              </p>
              <p className="mb-4">
                Imagine no possessions
                I wonder if you can
                No need for greed or hunger
                A brotherhood of man
              </p>
              <p className="mb-4">
                Imagine all the people
                Sharing all the world
                You
              </p>
              <p className="mb-4">
                You may say I'm a dreamer
                But I'm not the only one
                I hope someday you'll join us
                And the world will live as one
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
