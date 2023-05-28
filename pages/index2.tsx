import { Key } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { Router } from "next/router";

export const getStaticProps = async () => {
	const res = await fetch("http://localhost:5000/books");
	const data = await res.json();
	return {
		props: {
			books: data,
		},
	};
};
const Books = ({
	books,
}: {
	books: {
		id: Key;
		title: string;
		author: string;
		description: string;
		pages: number;
		category: string;
		available: boolean;
	}[];
}) => {
	return (
		<Layout>
			<h1 className="text-2xl font-bold mx-12 pt-6">All Books</h1>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 text-center mb-14">
				{books.map((book) => {
					return (
						<Link
							key={book.id}
							passHref
							href={{
								pathname: `/books/${book.id}`,
							}}
							className="cursor-pointer"
						>
							<div className="p-4" key={book.id}>
								<div className="rounded overflow-hidden shadow-lg">
									<div className="px-6 py-4">
										<div className="font-bold text-xl">{book.title} {book.id}</div>
										<div className="font-medium text-sm">{book.author}</div>
										<p className="text-gray-700 text-base line-clamp-2 truncate">
											{book.description}
										</p>
									</div>
									<div className="px-2 pt-4 pb-2">
										<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											{book.pages} Pages
										</span>
										<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											Category: {book.category}
										</span>
										<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
											{book.available ? (
												<div>
													<div className=" flex items-center justify-center bg-gray-200 rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 m-2 h-2 gap-2">
														<span className="">Available</span>
														<div className="w-3 h-3 bg-green-600 rounded-full"></div>
													</div>
												</div>
											) : (
												<div className=" flex items-center justify-center bg-gray-200 rounded-full py-1 text-sm font-semibold text-gray-700 mr-2 m-2 h-2 gap-2">
													<span className="">Not Available</span>
													<div className="w-3 h-3 bg-red-600 rounded-full"></div>
												</div>
											)}
										</span>
									</div>
									<button
										onClick={() => {
											location.assign("/");
										}}
										className={
											book.available
												? `btn btn-primary cursor-pointer`
												: `btn btn-primary cursor-not-allowed`
										}
										disabled={book.available ? false : true}
									>
										Book Now !
									</button>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</Layout>
	);
};
export default Books;
