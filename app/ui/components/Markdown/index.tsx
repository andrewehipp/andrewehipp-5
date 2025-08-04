import React from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import gfm from 'remark-gfm';
import Link from 'next/link';
import rehypeRaw from 'rehype-raw';

export interface MarkdownProps
    extends Options,
        Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
}

const LinkRenderer = ({ href = '', children, target, rel, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    return (
        <Link href={href} target={target} rel={rel} {...props}>
            {children}
        </Link>
    );
};

const Markdown: React.FC<MarkdownProps> = ({
    children,
    components = {},
    ...props
}) => {

    return (
        <ReactMarkdown
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
            ...components,
            a: LinkRenderer,
        }}
        {...props}
    >
        {children}
    </ReactMarkdown>
)
};

export default Markdown;
