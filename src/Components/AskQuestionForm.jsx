import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { InputComponent as Input, RTE, Button } from '../Components'

function AskQuestionForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.Title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });


    const submit = async (data) => {
        try {

        } catch (error) {

        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className='px-28'>
            <div className="flex flex-col items-center">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-3"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-3"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Question :" name="content" control={control} defaultValue={getValues("content")} />
                <div className="flex justify-center mt-7 w-72 ">
                    <Button type="submit" bgColor={post ? "bg-green-500" : undefined}
                        className='w-full'>
                        {post ? "Update" : "Submit"}
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default AskQuestionForm