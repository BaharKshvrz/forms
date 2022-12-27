# Use form managements tools for react forms

## formik

Formik takes care of the repetitive and annoying stuff—keeping track of values/errors/visited fields, orchestrating validation, and handling submission—so you don't have to. This means you spend less time wiring up state and change handlers and more time focusing on your business logic.

No fancy subscriptions or observables under the hood, just plain React state and props. By staying within the core React framework and away from magic, Formik makes debugging, testing, and reasoning about your forms a breeze. If you know React, and you know a bit about forms, you know Formik!

Formik does not use external state management libraries like Redux or MobX. This also makes Formik easy to adopt incrementally and keeps bundle size to a minimum.


## react final form

Architecture:

React Final Form is a thin React wrapper for Final Form, which is a subscriptions-based form state management library that uses the Observer pattern, so only the components that need updating are re-rendered as the form's state changes.

By default, React Final Form subscribes to all changes, but if you want to fine tune your form to optimized blazing-fast perfection, you may specify only the form state that you care about for rendering your gorgeous UI. You can think of it a little like GraphQL's feature of only fetching the data your component needs to render, and nothing else.


Zero Dependencies:
Only two peer dependencies: React and Final Form.

If bundle size is important to you – and it should be! – React Final Form provides one lean form management solution, weighing in at a miniscule 3.4KB gzipped (plus 5.6KB gzipped for Final Form).



## formik vs react final form
![[alt "formik vs final form"](/images/formik-vs-finalform.jpg)

Benefit in formik:
We can use "Schema Validation" in form. We use "yup" for this purpose.


Benefits in react final form:
Rerender Optimization: we are using "subscription in fields and form to prevent extra rendering in form".

Hooks Support: 
such as "useField"

On Submit Error Focus: Focus on First Error whenever we click on sumbit button

e.g.::
const focusOnError = createDecorator(); 
.
.
.
<Form
    onSubmit={showResults}
    subscription= {{submitting: true}}
    decorators= {[focusOnError]}    
>