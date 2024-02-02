import Cheatlayout from "../../layouts/Cheatlayout";
import Head from "next/head";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function Home() {
    return <Cheatlayout>
        <Head>
            <title>MongoDB Cheat Sheet  | Coding Tutorials</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="MongoDB Cheat Sheet" />
        </Head>
        <section className="lg:ml-36">
            <div className="lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="container mx-auto mt-4">
                    <h2 className=" text-blue-700 text-2xl text-center sm:text-xl  xl:text-4xl dark:text-blue">MongoDB Cheat Sheet  </h2>
                    <p className="mt-7"> Here is MongoDB quick reference code snippets which is useful for developers.  </p>

                    <p className=" text-primary dark:text-white text-xl mt-8 font-bold text-center sm:text-xl  xl:text-2xl dark:text-blue">Basic CRUD Operation </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 box-border rounded-2xl w-full p-1 mt-6 border-1 shadow-md shadow-cyan-600 hover:shadow-indigo-700">

                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Create </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.insertOne({name: "abc"})
db.coll.insert([{name: "ABC"}, {name:"XYZ"}]) // ordered bulk insert
db.coll.insert({date: ISODate()})
db.coll.insert({name: "ABC"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})
`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Delete </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.remove({name: "abc"})
db.coll.remove({}) // WARNING! Deletes all the docs but not the collection itself
db.coll.remove({name: "abc"}, {"writeConcern": {"w": "majority", "wtimeout": 5000}})
db.coll.findOneAndDelete({"name": "abc"})
`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Update </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.update({"_id": 1}, {"year": 2023}) // WARNING! Replaces the entire document
db.coll.update({"_id": 1}, {$set: {"year": 2023, name: "abc"}})
db.coll.update({"_id": 1}, {$rename: {"year": "date"} })
db.coll.update({"_id": 1}, {$mul: {price: NumberDecimal("5.50"), qty: 1}})
db.coll.update({"_id": 1}, {$min: {"quantity": 2}})
db.coll.update({"_id": 1}, {$max: {"quantity": 10}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": true}})
db.coll.update({"_id": 1}, {$currentDate: {"lastModified": {$type: "timestamp"}}})
`}
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Find </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.findOne() // returns a single document
db.coll.find()    // returns a cursor - show 20 results - "it" to display more
db.coll.find().pretty()
db.coll.find({name: "Max", age: 32}) // implicit logical "AND".
db.coll.find({date: ISODate("2020-09-25T13:57:17.180Z")})
db.coll.find({name: "Max", age: 32}).explain("executionStats") // or "queryPlanner" or "allPlansExecution"
db.coll.distinct("name")
` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">FindOneAndDelete </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.findOneAndUpdate({"name": "abc"}, {$inc: {"points": 5}}, {returnNewDocument: true})
` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Save into DB</p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.save({"item": "Laptop", "rupees": 100})` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Array Operation </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.update({"_id": 1}, {$push :{"array": 1}})
db.coll.update({"_id": 1}, {$pull :{"array": 1}})
db.coll.update({"_id": 1}, {$addToSet :{"array": 2}})
db.coll.update({"_id": 1}, {$pop: {"array": 1}})  // last element
db.coll.update({"_id": 1}, {$pop: {"array": -1}}) // first element
db.coll.updateOne({"_id": 1, "grades": 80}, {$set: {"grades.$": 94}})
db.coll.update({"_id": 1}, {$pullAll: {"array" :[2, 3, 6]}})
db.coll.update({"_id": 1}, {$push: {scores: {$each: [100,150,200]}}})
db.coll.updateMany({}, {$inc: {"grades.$[]": 10}})
db.coll.update({}, {$set: {"grades.$[element]": 100}}, {multi: true, arrayFilters: [{"element": {$gte: 100}}]})` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Count </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.estimatedDocumentCount()  // estimation based on collection metadata
db.coll.countDocuments({age: 32}) // alias for an aggregation pipeline - accurate count
` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Logical Operation </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.find({$or: [{name: "Max"}, {age: 32}]}) // implicit logical "OR".
db.coll.find({$and: [{name: "Max"}, {age: 32}]}) // implicit logical "AND".
db.coll.find({$nor: [{name: "Max"}, {age: 32}]}) // implicit logical "NOR".
db.coll.find({$not: [{name: "Max"}, {age: 32}]}) // implicit logical "NOT".
db.coll.find({$and: [{name: "Max"}, {age: {$gt: 30}}]}) // implicit logical "AND".
db.coll.find({$and: [{name: "Max"}, {age: {$gt: 30, $lt: 40}}]}) // implicit logical "AND".
db.coll.find({$and: [{name: "Max"}, {age: {$in: [30, 40]}}]}) // implicit logical "AND".
` }
                            </SyntaxHighlighter>
                        </div>
                        <div className="p-1 w-full ">
                            <p className=" text-primary dark:text-white text-xl text-center sm:text-xl  xl:text-2xl dark:text-blue">Comparsion </p>
                            <SyntaxHighlighter className="mt-10 mb-9" showLineNumbers startingLineNumber language="javascript" style={ a11yDark }>
                                { `db.coll.find({age: {$gt: 30}}) // greater than
db.coll.find({age: {$gte: 30}}) // greater than or equal
db.coll.find({age: {$lt: 30}}) // less than
db.coll.find({age: {$lte: 30}}) // less than or equal
db.coll.find({age: {$ne: 30}}) // not equal
db.coll.find({age: {$eq: 30}}) // equal
db.coll.find({age: {$in: [30, 40]}}) // in
db.coll.find({age: {$nin: [30, 40]}}) // not in
db.coll.find({age: {$exists: true}}) // exists
db.coll.find({age: {$exists: false}}) // not exists` }
                            </SyntaxHighlighter>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </Cheatlayout>;
}