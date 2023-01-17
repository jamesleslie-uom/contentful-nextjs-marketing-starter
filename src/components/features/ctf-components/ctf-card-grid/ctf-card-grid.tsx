import { CardGridFieldsFragment } from '@src/components/features/ctf-components/ctf-card-grid/__generated/ctf-card-grid.generated';

export const CtfCardGrid = (props: CardGridFieldsFragment) => {
  const { headline, subline, cardsCollection } = props;

  return (
    <section>
      <h2
        id=""
        className="border-b-2 border-gray-200 !pb-[24px] !mb-[24px] !max-w-none text-gray-900 block-uom"
      >
        {headline}
      </h2>
      <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-[24px]">
        {cardsCollection?.items?.map(card => (
          <a
            key={card?.sys?.id}
            href={card?.url ?? undefined}
            className="h-full max-h-[316px] group flex flex-col rounded-lg border-2 border-transparent bg-white p-6 text-left shadow hover:no-underline hover:shadow-lg  focus:border-blue-700 focus:outline-none block"
            target="_self"
          >
            <h3 className="block-uplift text-lg font-semibold leading-6 text-gray-900">
              {card?.headline}
            </h3>
            <div className="flex-grow overflow-ellipsis line-clamp-6 break-words pt-2 text-base font-normal leading-6 text-gray-600">
              Computers, phones, software, accounts, applications, networks, printers, storage and
              cybersecurity
            </div>
            <div className="mt-auto pt-6 text-sm font-medium leading-5 text-blue-700 hover:underline">
              View{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="mb-[4px] inline h-3.5 w-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
